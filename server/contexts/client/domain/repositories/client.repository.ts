import type { Client } from '#shared/types'

export interface ClientRepository {
  findByCups(cups: string): Promise<Client | undefined>
}
