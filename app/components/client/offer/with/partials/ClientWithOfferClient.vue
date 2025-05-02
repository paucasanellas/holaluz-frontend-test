<template>
  <div>
    <h2 class="text-lg font-bold md:text-2xl">
      {{ $t('client.data.supplyPointHeader') }}
    </h2>
    <div class="mt-4">
      <UIListItem :title="$t('client.data.address')">
        <p>{{ store.client.address }}</p>
      </UIListItem>
      <UIListItem :title="$t('client.data.cups')">
        <p>{{ store.client.cups }}</p>
      </UIListItem>
      <UIListItem :title="$t('client.data.tariff')">
        <p>{{ store.supplyPoint.tariff }}</p>
      </UIListItem>
      <UIListItem :title="$t('client.data.contractedPower')">
        <p>{{ $t('client.data.p1') }}: {{ store.supplyPoint.power.p1 }}W</p>
        <p>{{ $t('client.data.p2') }}: {{ store.supplyPoint.power.p2 }}W</p>
      </UIListItem>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useOfferStore()
</script>
