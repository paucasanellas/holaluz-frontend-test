import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  outputDir: './tests/e2e/reports',
  use: {
    locale: 'es-ES',
    baseURL: 'http://localhost:8012',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
})
