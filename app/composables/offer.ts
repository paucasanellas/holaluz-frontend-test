import type { OfferApplyRequest, OfferResponse } from '#shared/types'

export const useOffer = () => {
  async function getByCups(cups: string) {
    return useServer<OfferResponse>(`/api/offers/${cups}`)
  }

  async function apply(body: Partial<OfferApplyRequest>) {
    return useServer('/api/offers/apply', {
      body,
      method: 'POST',
    })
  }

  return {
    getByCups,
    apply,
  }
}
