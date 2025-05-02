import type { ClientRepository } from '@@/server/contexts/client/domain/repositories/client.repository'
import { NotFoundError } from '@@/server/contexts/shared/errors/NotFoundError'
import { InvalidParamsError } from '@@/server/contexts/shared/errors/InvalidParamsError'
import type { OfferApplyRequest } from '#shared/types'

export class ApplyOfferUseCase {
  constructor(
    private deps: {
      clientRepository: ClientRepository
    },
  ) {}

  async execute(data: OfferApplyRequest) {
    if (!data.cups) {
      throw new InvalidParamsError('Invalid CUPS')
    }

    const client = await this.deps.clientRepository.findByCups(data.cups)
    if (!client) throw new NotFoundError('Client not found')
    console.info(`[Offer] Offer apply ${data.cups} ${data.discount} ${data.offer}`)
  }
}
