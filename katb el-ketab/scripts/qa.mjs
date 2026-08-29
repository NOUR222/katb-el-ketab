import AxeBuilder from '@axe-core/playwright'
import { chromium } from 'playwright-core'
import { mkdir } from 'node:fs/promises'

const baseUrl = process.env.QA_URL ?? 'http://127.0.0.1:4173/?guest=Ahmed%20Family'
const outputDir = process.env.QA_OUTPUT ?? '/tmp/katb-el-ketab-qa'
const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

await mkdir(outputDir, { recursive: true })

const browser = await chromium.launch({ headless: true, executablePath })
const results = []

for (const device of [
  { name: 'desktop', viewport: { width: 1440, height: 1000 }, isMobile: false },
  { name: 'mobile', viewport: { width: 390, height: 844 }, isMobile: true },
]) {
  const context = await browser.newContext({
    viewport: device.viewport,
    isMobile: device.isMobile,
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  const consoleErrors = []
  const submissions = []

  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
    if (message.text().includes('[RSVP submission]')) submissions.push(message.text())
  })
  page.on('pageerror', (error) => consoleErrors.push(error.message))

  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
  await page.locator('#invitation-title').waitFor()
  await page.waitForTimeout(1_200)
  const openingAccessibility = await new AxeBuilder({ page }).analyze()
  await page.keyboard.press('Tab')
  const openingFocusWrapped = await page.getByRole('button', { name: 'Open our story and invitation' }).evaluate(
    (button) => button === document.activeElement,
  )
  await page.screenshot({ path: `${outputDir}/${device.name}-opening.png`, fullPage: false })

  const personalized = await page.getByText('Ahmed Family', { exact: true }).count()
  await page.getByRole('button', { name: 'Open our story and invitation' }).click()
  await page.locator('#home').waitFor()
  await page.waitForTimeout(1_100)

  const overflow = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }))
  await page.screenshot({ path: `${outputDir}/${device.name}-hero.png`, fullPage: false })
  for (const sectionId of ['details', 'story', 'venue', 'gallery', 'rsvp']) {
    await page.locator(`#${sectionId}`).scrollIntoViewIfNeeded()
    await page.waitForTimeout(150)
  }
  const brokenImages = await page.locator('img').evaluateAll((images) =>
    images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.getAttribute('src')),
  )
  await page.locator('#gallery').scrollIntoViewIfNeeded()
  await page.locator('#gallery button').first().click()
  const lightboxVisible = await page.getByRole('dialog', { name: 'Photo gallery' }).isVisible()
  await page.waitForTimeout(450)
  await page.screenshot({ path: `${outputDir}/${device.name}-lightbox.png`, fullPage: false })
  await page.keyboard.press('Escape')
  await page.waitForTimeout(450)
  const lightboxClosed = await page.getByRole('dialog', { name: 'Photo gallery' }).count() === 0

  await page.locator('#rsvp').scrollIntoViewIfNeeded()
  await page.getByLabel('Name').fill('Ahmed Family')
  await page.getByLabel('Party size (including you)').selectOption('2')
  await page.getByLabel(/A note for the couple/).fill('Looking forward to celebrating with you!')
  await page.getByRole('button', { name: 'Prepare my reply' }).click()
  await page.getByRole('heading', { name: 'Reply prepared' }).waitFor()

  const accessibility = await new AxeBuilder({ page }).analyze()

  await page.screenshot({ path: `${outputDir}/${device.name}-rsvp.png`, fullPage: false })
  results.push({
    device: device.name,
    personalized: personalized > 0,
    overflow,
    brokenImages,
    lightboxVisible,
    lightboxClosed,
    openingFocusWrapped,
    rsvpLogged: submissions.length > 0,
    openingAccessibilityViolations: openingAccessibility.violations.map(({ id, impact, help, nodes }) => ({
      id,
      impact,
      help,
      nodes: nodes.map((node) => ({ target: node.target, html: node.html })),
    })),
    accessibilityViolations: accessibility.violations.map(({ id, impact, help, nodes }) => ({
      id,
      impact,
      help,
      nodes: nodes.map((node) => ({ target: node.target, html: node.html })),
    })),
    consoleErrors,
  })
  await context.close()
}

await browser.close()
console.log(JSON.stringify({ outputDir, results }, null, 2))
