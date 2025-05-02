import type { ClientRepository } from '@@/server/contexts/client/domain/repositories/client.repository'
import type { FetchRepository } from '@@/server/contexts/fetch/domain/fetch.repository'
import { clientToDomain } from '@@/server/contexts/client/infrastructure/parsers/client.parser'
import type { ClientDTO } from '@@/server/contexts/client/interfaces/ClientDTO'

export class APIClientRepository implements ClientRepository {
  constructor(private deps: {
    fetchRepository: FetchRepository
  }) {}

  public async findByCups(cups: string) {
    const clients = await this.deps.fetchRepository.fetch<ClientDTO[]>('/data/clients.json')
    const client = clients.find(client => client.cups === cups)
    return client ? clientToDomain(client) : undefined
  }
}
