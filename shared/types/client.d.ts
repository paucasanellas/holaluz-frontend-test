import type { BuildingType } from '#shared/const/client'

export type Client = {
  fullName: string
  address: string
  cups: string
  role: string
  buildingType: BuildingType
}
