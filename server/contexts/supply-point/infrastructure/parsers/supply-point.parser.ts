import type { SupplyPointDTO, SupplyPointPowerDTO } from '@@/server/contexts/supply-point/interfaces/SupplyPointDTO'
import type { SupplyPoint, SupplyPointPower } from '#shared/types'

export const supplyPointToDomain = (supplyPoint: SupplyPointDTO): SupplyPoint => {
  return {
    cups: supplyPoint.cups,
    invoicedAmount: Number(supplyPoint.invoiced_amount),
    neighbors: supplyPoint.neighbors,
    power: powerToDomain(supplyPoint.power),
    tariff: supplyPoint.tariff,
  }
}

function powerToDomain(power: SupplyPointPowerDTO): SupplyPointPower {
  return {
    p1: Number(power.p1),
    p2: Number(power.p2),
  }
}
