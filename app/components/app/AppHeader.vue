<template>
  <header class="mb-12 flex w-full items-center">
    <NuxtLinkLocale
      :to="{ name: 'index' }"
      class="ml-auto"
    >
      <AppLogo />
    </NuxtLinkLocale>
    <AppActions class="ml-auto" />
  </header>
</template>
