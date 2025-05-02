<template>
  <div>
    <ClientWithoutOfferTitle />
    <ClientWithoutOfferReason
      :has-neighbors="hasNeighbors"
      :has-house-building-type="hasHouseBuildingType"
    />
  </div>
</template>

<script setup lang="ts">
import { BuildingType } from '#shared/const/client'

const store = useOfferStore()

const hasNeighbors = computed(() => Boolean(store.supplyPoint.neighbors.length))
const hasHouseBuildingType = computed(() => store.client.buildingType === BuildingType.HOUSE)
</script>
