import type { ClientRepository } from '@@/server/contexts/client/domain/repositories/client.repository'
import type { SupplyPointRepository } from '@@/server/contexts/supply-point/domain/repositories/supply-point.repository'
import { Offer } from '@@/server/contexts/offer/domain/entities/Offer'
import { NotFoundError } from '@@/server/contexts/shared/errors/NotFoundError'
import { InvalidParamsError } from '@@/server/contexts/shared/errors/InvalidParamsError'
import type { OfferResponse } from '#shared/types'

export class GetOfferUseCase {
  constructor(
    private deps: {
      clientRepository: ClientRepository
      supplyPointRepository: SupplyPointRepository
    },
  ) {}

  async execute(cups: string): Promise<OfferResponse> {
    if (!cups) {
      throw new InvalidParamsError('Invalid CUPS')
    }

    const client = await this.deps.clientRepository.findByCups(cups)
    if (!client) throw new NotFoundError('Client not found')

    const supplyPoint = await this.deps.supplyPointRepository.findByCups(cups)
    if (!supplyPoint) throw new NotFoundError('Supply Point not found')

    const neighborsSupplyPoints = await Promise.all(
      supplyPoint.neighbors.map(neighborCups => this.deps.supplyPointRepository.findByCups(neighborCups)),
    )

    const neighbors = neighborsSupplyPoints.filter(neighbor => !!neighbor)

    const offerEntity = new Offer(client, supplyPoint, neighbors)
    const offer = offerEntity.calculate()

    return {
      offer,
      client,
      supplyPoint,
    }
  }
}
