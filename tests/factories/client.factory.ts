import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'
import { cupsFactory } from '@@/tests/factories/cups.factory'
import type { Client } from '#shared/types'
import { BuildingType } from '#shared/const/client'

export const clientFactory = Factory.define<Client>(() => ({
  cups: cupsFactory(),
  fullName: faker.person.fullName(),
  address: faker.location.streetAddress(),
  role: faker.helpers.arrayElement(['customer', 'customer-basic', 'customer-premium']),
  buildingType: faker.helpers.arrayElement([BuildingType.HOUSE, BuildingType.APARTAMENT]),
}))
