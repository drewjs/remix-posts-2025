import { test, expect } from '@playwright/test'

test('home page loads properly', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Remix/)

  await expect(page.getByText('Welcome to')).toBeVisible()

  await expect(page.getByText("What's next?")).toBeVisible()

  await expect(page.getByRole('link', { name: /Quick Start/ })).toBeVisible()
})
