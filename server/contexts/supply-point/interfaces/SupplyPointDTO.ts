export type SupplyPointPowerDTO = {
  p1: string
  p2: string
}

export type SupplyPointDTO = {
  cups: string
  tariff: string
  invoiced_amount: string
  power: SupplyPointPowerDTO
  neighbors: string[]
}
