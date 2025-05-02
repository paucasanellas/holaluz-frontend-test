export type SupplyPointPower = {
  p1: number
  p2: number
}

export type SupplyPoint = {
  cups: string
  tariff: string
  invoicedAmount: number
  power: SupplyPointPower
  neighbors: string[]
}
