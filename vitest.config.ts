import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    exclude: ['node_modules', 'tests'],
    setupFiles: ['./vitest.setup.ts'],
    environment: 'nuxt',
    environmentOptions: {
      domEnvironment: 'happy-dom',
    },
    globals: true,
  },
})
