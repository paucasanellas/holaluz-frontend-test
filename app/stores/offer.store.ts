import type { OfferResponse } from '#shared/types'

type OfferState = OfferResponse

export const useOfferStore = defineStore('offer', () => {
  const state = reactive<OfferState>({} as OfferState)

  function setOffer(data: OfferState) {
    Object.assign(state, data)
  }

  const client = computed(() => state.client)
  const supplyPoint = computed(() => state.supplyPoint)
  const offer = computed(() => state.offer)

  return {
    state,
    client,
    supplyPoint,
    offer,
    setOffer,
  }
})
