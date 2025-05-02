import type { SupplyPointRepository } from '@@/server/contexts/supply-point/domain/repositories/supply-point.repository'
import type { FetchRepository } from '@@/server/contexts/fetch/domain/fetch.repository'
import { supplyPointToDomain } from '@@/server/contexts/supply-point/infrastructure/parsers/supply-point.parser'
import type { SupplyPointDTO } from '@@/server/contexts/supply-point/interfaces/SupplyPointDTO'

export class APISupplyPointRepository implements SupplyPointRepository {
  constructor(private deps: {
    fetchRepository: FetchRepository
  }) {}

  public async findByCups(cups: string) {
    const supplyPoints = await this.deps.fetchRepository.fetch<SupplyPointDTO[]>('/data/supply-points.json')
    const supplyPoint = supplyPoints.find(supplyPoint => supplyPoint.cups === cups)
    return supplyPoint ? supplyPointToDomain(supplyPoint) : undefined
  }
}
