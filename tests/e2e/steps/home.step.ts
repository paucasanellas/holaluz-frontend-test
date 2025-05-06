import { Then, When, expect } from '@@/tests/e2e'

When('the user goes on the home page', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
})

Then('the user sees a home main heading', async ({ page }) => {
  const main = page.getByRole('main')
  const title = main.getByRole('heading', { name: 'Reduce tu factura de luz a 0€ y ahorra más que nunca.', level: 1 })
  await expect(title).toBeVisible()

  const form = page.getByRole('form')
  const input = form.getByLabel('Número cups')
  const button = form.getByRole('button', { name: '¡Quiero un descuento!' })
  await input.fill('123456')
  await expect(button).toBeEnabled()
})
