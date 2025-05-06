import { Then, When, expect } from '@@/tests/e2e'

When('The user goes on the Rooftop Revolution Page', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  const main = page.getByRole('main')
  await expect(main).toBeVisible()
})

Then('The user have been redirect to Rooftop Revolution Offer Page', async ({ page }) => {
  await page.waitForURL('**/client/123456')
  const expectedUrl = '/client/123456'
  const currentUrl = page.url()
  expect(currentUrl).toContain(expectedUrl)
})
