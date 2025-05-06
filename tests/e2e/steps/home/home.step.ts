import { Then, expect } from '@@/tests/e2e'

Then('The user sees a Rooftop Revolution Page heading {string}', async ({ page }, heading: string) => {
  const title = page.getByRole('heading', { name: heading, level: 1 })
  await expect(title).toBeVisible()
})
