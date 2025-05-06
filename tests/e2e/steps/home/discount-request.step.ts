import { Then, expect } from '@@/tests/e2e'

Then('The user sees a Client Finder by Cups Form {string}', async ({ page }, heading: string) => {
  const form = await page.getByRole('form')
  const title = page.getByRole('heading', { name: heading, level: 3 })

  const cupsInput = form.getByLabel('Número cups')
  const submitButton = form.getByRole('button', { name: '¡Quiero un descuento!' })

  await expect(title).toBeVisible()
  await expect(cupsInput).toBeVisible()
  await expect(submitButton).toBeVisible()
})

Then('The user enters a invalid CUPS', async ({ page }) => {
  const invalidCups = 'invalidCups'
  const form = await page.getByRole('form')
  const cupsInput = form.getByLabel('Número cups')
  await cupsInput.fill(invalidCups)
  await cupsInput.blur()
  const error = form.getByText('CUPS inválido')
  await expect(error).toBeVisible()
})

Then('The user enters a valid CUPS', async ({ page }) => {
  const validCups = '123456'
  const form = await page.getByRole('form')
  const cupsInput = form.getByLabel('Número cups')
  await cupsInput.fill(validCups)
})

Then('The submit button should be disabled', async ({ page }) => {
  const form = await page.getByRole('form')
  const submitButton = form.getByRole('button', { name: '¡Quiero un descuento!' })
  expect(submitButton).toBeDisabled()
})

Then('The submit button should be enabled', async ({ page }) => {
  const form = await page.getByRole('form')
  const submitButton = form.getByRole('button', { name: '¡Quiero un descuento!' })
  expect(submitButton).toBeEnabled()
})

Then('The user submit the Rooftop Revolution Discount Request Form', async ({ page }) => {
  const form = await page.getByRole('form')
  const submitButton = form.getByRole('button', { name: '¡Quiero un descuento!' })
  await submitButton.click()
})
