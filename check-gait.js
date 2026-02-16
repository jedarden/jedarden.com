const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  
  await page.goto('https://jedarden.github.io/jedarden.com/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  // Scroll to Gait
  await page.evaluate(() => {
    const gait = document.querySelector('[data-project="gait"]');
    if (gait) {
      const rect = gait.getBoundingClientRect();
      window.scrollTo(0, window.scrollY + rect.top - 100);
    }
  });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/home/coder/jedarden.com/gait-check.png' });
  
  await browser.close();
  console.log('Screenshot saved to gait-check.png');
})();
