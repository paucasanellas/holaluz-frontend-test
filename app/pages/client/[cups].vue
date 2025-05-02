<template>
  <main v-if="data">
    <ClientWithOffer v-if="data.offer" />
    <ClientWithoutOffer v-else />
  </main>
</template>

<script lang="ts" setup>
const $offer = useOffer()
const { setOffer } = useOfferStore()
const { params } = useRoute()

const { error, data } = await useAsyncData('client-offer', async () => {
  return $offer.getByCups(params.cups as string)
})

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode,
    statusMessage: error.value.statusMessage,
    fatal: true,
  })
}

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Not found',
    fatal: true,
  })
}

setOffer(data.value)

const { t } = useI18n()
useSeoMeta({
  title: t('home.meta.title'),
})
</script>
