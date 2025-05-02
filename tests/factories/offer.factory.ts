import { Factory } from 'fishery'
import type { OfferType } from '#shared/types'
import { offerTypes } from '~~/shared/const/offer'

export const offerFactory = Factory.define<OfferType>(() => ({
  id: offerTypes.STANDARD,
  discount: 0,
}))
