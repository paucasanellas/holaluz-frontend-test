import type { OfferApplyRequest } from '#shared/types'

export const useServerOffer = () => {
  const get = (cups: string) => {
    const { container } = useNitroApp()
    const getOfferUseCase = container.resolve('getOfferUseCase')
    return getOfferUseCase.execute(cups)
  }

  const apply = async (data: OfferApplyRequest) => {
    const { container } = useNitroApp()
    const applyOfferUseCase = container.resolve('applyOfferUseCase')
    await applyOfferUseCase.execute(data)
    await useSleep(1000)
  }

  return {
    get,
    apply,
  }
}
