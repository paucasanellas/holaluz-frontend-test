<template>
  <Transition
    name="fade"
    mode="out-in"
    @click="isDarkMode = !isDarkMode"
  >
    <IconSun
      v-if="isDarkMode"
      class="text-white"
    />
    <IconMoon v-else />
  </Transition>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDarkMode = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(isDark) {
    colorMode.preference = isDark ? 'dark' : 'light'
  },
})
</script>
