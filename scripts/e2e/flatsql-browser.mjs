// The actual example ingests records, queries them and runs the generated cipher.
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { serveDemo } from '../../packages/standards-explorer/examples/serve-flatsql.mjs';

const server = await serveDemo();
let browser;
let page;
const errors = [];
try {
  browser = await chromium.launch({ headless: true, executablePath: process.env.SDS_BROWSER_EXECUTABLE });
  page = await browser.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => errors.push(`${new URL(request.url()).pathname}: ${request.failure()?.errorText}`));
  await page.route('**/*', route => {
    if (new URL(route.request().url()).hostname === '127.0.0.1') return route.continue();
    return route.abort();
  });
  await page.goto(`http://127.0.0.1:${server.address().port}`);
  await page.waitForFunction(() => ['Ready', 'Error'].includes(document.getElementById('init-status').textContent));
  assert.equal(await page.locator('#init-status').textContent(), 'Ready', await page.locator('#activity-log').innerText());
  assert.equal(await page.evaluate(() => crossOriginIsolated), true);
  await page.locator('#sql-input').fill('SELECT OBJECT_NAME FROM OMM ORDER BY NORAD_CAT_ID');
  await page.locator('#run-query-btn').click();
  await page.waitForFunction(() => document.querySelectorAll('#query-results tbody tr').length === 10);
  await page.locator('#run-encryption-btn').click();
  await page.waitForFunction(() => /PASS:|failed:/.test(document.getElementById('enc-results').textContent));
  assert.match(await page.locator('#enc-results').textContent(), /^PASS:/);
  assert.deepEqual(errors, []);
  console.log('PASS browser example: FlatSQL 3.12.6 OPFS ingestion, ten SQL rows and generated KMF encryption');
} catch (error) {
  console.error('Browser errors:', errors.join('; '));
  console.error('Activity:', await page?.locator('#activity-log').innerText());
  throw error;
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
