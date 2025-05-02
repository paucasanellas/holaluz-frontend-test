<template>
  <main class="grid lg:grid-cols-2 gap-16 items-center mt-24">
    <HomeTitle />
    <HomeForm />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()

useSeoMeta({
  title: t('home.meta.title'),
})
</script>
