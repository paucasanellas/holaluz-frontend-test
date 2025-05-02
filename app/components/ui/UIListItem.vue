<template>
  <div class="mb-4">
    <h3 class="font-bold">
      {{ title }}
    </h3>
    <div class="text-sm font-light">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
