<template>
  <p v-if="!hasHouseBuildingType">
    {{ $t('client.clientNotOffer.offerHousesOnly') }}
  </p>
  <p v-else-if="!hasNeighbors">
    {{ $t('client.clientNotOffer.advantageNoNeighbors') }}
  </p>
  <p v-else>
    {{ $t('client.clientNotOffer.noOffer') }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  hasNeighbors: {
    type: Boolean,
    required: true,
  },
  hasHouseBuildingType: {
    type: Boolean,
    required: true,
  },
})
</script>
