<template>
  <USelectMenu
    v-model="currentLocale"
    :items="locales"
    :ui="{ content: 'w-32' }"
    :search-input="false"
    variant="none"
  >
    <template
      v-if="currentLocale"
      #trailing
    >
      <UIcon
        name="heroicons:language"
        class="cursor-pointer text-lg"
      />
    </template>
    <template #item-label="{ item: language }">
      <span class="truncate">{{ language.name }}</span>
    </template>
  </USelectMenu>
</template>

<script setup lang="ts">
import type { Locale } from '#shared/types'

const { locale, locales, setLocale } = useI18n()

const changeLocale = (language: Locale) => {
  setLocale(language.code)
}

const currentLocale = computed({
  get: () => locales.value.find(language => language.code === locale.value),
  set: (language) => {
    changeLocale(language!)
  },
})
</script>
