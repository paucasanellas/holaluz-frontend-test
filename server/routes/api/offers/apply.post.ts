import { applyOfferRequestSchema } from '@@/server/utils/schemas/offer.schema'
import type { OfferApplyRequest } from '#shared/types'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event) as OfferApplyRequest
    const data = applyOfferRequestSchema.parse(body)
    const $offer = useServerOffer()
    await $offer.apply(data)
  }
  catch (error) {
    useServerError(error)
  }
})

defineRouteMeta({
  openAPI: {},
})
