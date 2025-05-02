<template>
  <UApp :locale="locales[locale]">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const config = useAppConfig()
const { locale } = useI18n()

useSeoMeta({
  titleTemplate: `%s - ${config.app.name}`,
})

const head = useLocaleHead({
  dir: true,
  key: 'id',
  seo: true,
})

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs?.lang,
    class: 'scroll-smooth',
  },
})

await callOnce(async () => {
  //
})

watch(locale, async () => {
  //
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.25s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
