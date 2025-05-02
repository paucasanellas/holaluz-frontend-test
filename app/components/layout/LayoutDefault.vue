<template>
  <div
    :class="isDarkMode ? nightClasses : dayClasses"
    class="grid min-h-screen items-center bg-gradient-to-br via-secondary to-tertiary bg-size-200 p-4 sm:p-8 transition duration-300"
  >
    <UContainer class="rounded bg-white !py-8 !px-16 !pb-28 shadow-xl dark:bg-slate-800 max-h-max">
      <slot />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const dayClasses = 'bg-pos-100 via-70% from-primary'
const nightClasses = 'dark bg-pos-0 from-slate-900 via-90%'

const colorMode = useColorMode()
const isDarkMode = computed(() => colorMode.value === 'dark')
</script>
