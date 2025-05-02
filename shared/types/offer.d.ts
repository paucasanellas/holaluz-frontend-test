import type { offerTypes } from '#shared/const/offer'
import type { Client, SupplyPoint } from '#shared/types'

export type OfferType = {
  id: offerTypes
  discount: number
}

export type OfferResponse = {
  client: Client
  offer: OfferType | null
  supplyPoint: SupplyPoint
}

export type OfferApplyRequest = {
  cups: string
  discount: number
  offer: offerTypes
}
