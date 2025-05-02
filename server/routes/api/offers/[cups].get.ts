export default defineEventHandler(async (event) => {
  const cups = await getRouterParam(event, 'cups')
  const $offer = useServerOffer()

  try {
    return await $offer.get(cups as string)
  }
  catch (error) {
    useServerError(error)
  }
})

defineRouteMeta({
  openAPI: {},
})
