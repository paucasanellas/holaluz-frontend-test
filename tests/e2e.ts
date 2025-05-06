import { createBdd } from 'playwright-bdd'

export { expect, test } from '@playwright/test'

export const { Given, When, Then } = createBdd()
