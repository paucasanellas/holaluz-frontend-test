export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@@/modules/i18n',
  ],
  components: [
    { path: '@/components', pathPrefix: false },
  ],
  devtools: {
    enabled: import.meta.env.NUXT_DEVTOOLS || false,
    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  css: ['@/assets/css/main.css'],
  colorMode: {
    preference: 'light',
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'error'],
    },
  },
  runtimeConfig: {
    API_ENDPOINT: import.meta.env.API_ENDPOINT,
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  nitro: {
    experimental: {
      openAPI: true,
    },
    compressPublicAssets: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName: true,
        },
      },
    },
  },
  telemetry: {
    enabled: false,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    skipSettingLocaleOnNavigate: false,
    baseUrl: '/',
    locales: [
      { code: 'es', language: 'es-ES', file: 'es.json', name: 'Español' },
      { code: 'en', language: 'en-EN', file: 'en.json', name: 'English' },
    ],
    defaultLocale: 'es',
    langDir: 'locales',
    restructureDir: './app',
  },
  pinia: {
    storesDirs: ['./app/stores/**.store.ts'],
  },
})
