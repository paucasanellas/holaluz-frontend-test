import type { SupplyPoint } from '#shared/types'

export interface SupplyPointRepository {
  findByCups(cups: string): Promise<SupplyPoint | undefined>
}
