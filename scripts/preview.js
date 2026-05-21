const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const target = process.argv[2] || 'morimori.html';
  const out = process.argv[3] || 'preview.png';
  const fileUrl = `file://${path.resolve(target)}`;

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1024 } });
  await page.goto(fileUrl);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();

  console.log(`Saved preview: ${out}`);
})();
