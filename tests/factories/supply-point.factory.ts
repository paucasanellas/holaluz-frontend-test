import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'
import { cupsFactory } from '@@/tests/factories/cups.factory'
import type { SupplyPoint } from '#shared/types'

export const supplyPointFactory = Factory.define<SupplyPoint>(() => ({
  cups: cupsFactory(),
  tariff: faker.helpers.arrayElement(['One price', 'Two prices', 'Three prices']),
  invoicedAmount: Number(faker.finance.amount({ min: 30, max: 250 })),
  power: {
    p1: faker.number.int({ min: 3000, max: 7000 }),
    p2: faker.number.int({ min: 3000, max: 7000 }),
  },
  neighbors: [],
}))
