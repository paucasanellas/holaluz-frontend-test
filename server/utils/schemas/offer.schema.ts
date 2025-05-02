import { z } from 'zod'
import { offerTypes } from '#shared/const/offer'

export const applyOfferRequestSchema = z.object({
  cups: z.string(),
  offer: z.nativeEnum(offerTypes),
  discount: z.number(),
})
