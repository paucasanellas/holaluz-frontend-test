import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const testDir = defineBddConfig({
  features: 'tests/e2e/features/**/*.feature',
  steps: 'tests/e2e/steps/**/*.step.ts',
  outputDir: 'tests/e2e/.output',
})

export default defineConfig({
  testDir,
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
