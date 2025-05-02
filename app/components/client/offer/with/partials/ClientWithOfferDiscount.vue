<template>
  <div v-if="store.offer">
    <h2 class="mb-4 text-3xl font-bold">
      <template v-if="store.offer.discount">
        {{ $t('client.discountOffer.hasDiscountWithPercentage') }}
        <span class="text-primary">{{ $t(`client.discountOffer.${store.offer.id}`) }}</span>
        {{ $t('client.discountOffer.percentage', { percentage: store.offer.discount }) }}
      </template>
      <template v-else>
        {{ $t('client.discountOffer.hasDiscount') }}
        <span class="text-primary">{{ $t(`client.discountOffer.${store.offer.id}`) }}</span>
      </template>
    </h2>
    <p class="mb-4 text-lg">
      {{ $t('client.discountOffer.stepAway') }}
    </p>
    <UButton
      :loading="isLoading"
      block
      size="xl"
      @click="submit"
    >
      {{ $t('client.discountOffer.requestDiscount') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { apply } = useOffer()
const store = useOfferStore()

const isLoading = ref(false)
const hasError = ref(false)

const submit = async () => {
  try {
    isLoading.value = true
    hasError.value = false

    await apply({
      cups: store.client.cups,
      discount: store.offer?.discount,
      offer: store.offer?.id,
    })

    navigateTo(localePath({ name: 'thanks' }))
  }
  catch {
    hasError.value = true
  }
  finally {
    isLoading.value = false
  }
}
</script>
