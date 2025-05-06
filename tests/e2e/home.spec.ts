import { expect, test } from '@@/tests/e2e'

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
})

test('should see a heading title', async ({ page }) => {
  const heading = await page.getByRole('heading', { name: 'Reduce tu factura de luz a 0€ y ahorra más que nunca.' })
  await expect(heading).toBeVisible()
})

test('should see a finder client by cups form', async ({ page }) => {
  const form = page.getByRole('form')
  const input = form.getByLabel('Número cups')
  const button = form.getByRole('button', { name: '¡Quiero un descuento!' })
  await input.fill('123456')
  await expect(button).toBeEnabled()
})
