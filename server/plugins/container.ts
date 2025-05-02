import type { RuntimeConfig } from 'nuxt/schema'
import { createContainer, asClass, type AwilixContainer, asValue } from 'awilix'

import { APIFetchRepository } from '@@/server/contexts/fetch/infrastructure/fetch.repository'
import { APIClientRepository } from '@@/server/contexts/client/infrastructure/api-client.repository'
import { APISupplyPointRepository } from '@@/server/contexts/supply-point/infrastructure/api-supply-point.repository'
import { GetOfferUseCase } from '@@/server/contexts/offer/application/use-cases/get-offer.use-case'
import { ApplyOfferUseCase } from '@@/server/contexts/offer/application/use-cases/apply-offer.use-case'

type ServerContainer = {
  config: RuntimeConfig
  fetchRepository: APIFetchRepository
  clientRepository: APIClientRepository
  supplyPointRepository: APISupplyPointRepository
  getOfferUseCase: GetOfferUseCase
  applyOfferUseCase: ApplyOfferUseCase
}

export default defineNitroPlugin((nitro) => {
  const container = createContainer<ServerContainer>({ strict: true })
  const config = useRuntimeConfig()

  container.register({
    config: asValue(config),
    fetchRepository: asClass(APIFetchRepository).singleton(),
    clientRepository: asClass(APIClientRepository),
    supplyPointRepository: asClass(APISupplyPointRepository),
    getOfferUseCase: asClass(GetOfferUseCase),
    applyOfferUseCase: asClass(ApplyOfferUseCase),
  })

  nitro.container = container
})

declare module 'nitropack' {
  interface NitroApp {
    container: AwilixContainer<ServerContainer>
  }
}
