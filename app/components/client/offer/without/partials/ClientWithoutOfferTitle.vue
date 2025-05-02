<template>
  <h1 class="mb-4 text-pretty text-2xl font-bold md:text-5xl">
    {{ $t('client.clientNotOffer.apology', { name: store.client.fullName }) }}
  </h1>
</template>

<script lang="ts" setup>
const store = useOfferStore()
</script>
