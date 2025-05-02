import type { ClientDTO } from '@@/server/contexts/client/interfaces/ClientDTO'
import type { Client } from '#shared/types'
import type { BuildingType } from '#shared/const/client'

export const clientToDomain = (client: ClientDTO): Client => {
  return {
    fullName: client.full_name,
    address: client.address,
    buildingType: client.building_type as BuildingType,
    cups: client.cups,
    role: client.role,
  }
}
