const { chromium } = require('playwright');

async function captureScrollPosition0() {
    console.log('🎬 Launching browser...');
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Set viewport size
    await page.setViewportSize({ width: 1920, height: 1080 });

    try {
        console.log('📄 Loading page...');
        // Use GitHub Pages URL
        await page.goto('https://jedarden.github.io/jedarden.com/', {
            waitUntil: 'networkidle'
        });

        // Ensure we're at scroll position 0
        await page.evaluate(() => window.scrollTo(0, 0));

        // Wait a moment for animations to settle
        await page.waitForTimeout(2000);

        // Verify scroll position
        const scrollY = await page.evaluate(() => window.scrollY);
        console.log(`📍 Current scroll position: ${scrollY}`);

        // Take screenshot
        const screenshotPath = '/home/coder/jedarden.com/screenshot-scroll-0.png';
        await page.screenshot({
            path: screenshotPath,
            fullPage: false  // Only visible viewport
        });

        console.log(`✅ Screenshot saved to: ${screenshotPath}`);

        // Get logo info
        const logoInfo = await page.evaluate(() => {
            const logo = document.querySelector('.floating-logo');
            const computedStyle = window.getComputedStyle(logo);
            const rect = logo.getBoundingClientRect();

            return {
                opacity: computedStyle.opacity,
                transform: computedStyle.transform,
                position: {
                    top: computedStyle.top,
                    left: computedStyle.left
                },
                size: {
                    width: rect.width,
                    height: rect.height
                },
                boundingBox: {
                    top: rect.top,
                    left: rect.left
                }
            };
        });

        console.log('\n📊 Logo State at Scroll Position 0:');
        console.log(JSON.stringify(logoInfo, null, 2));

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await browser.close();
        console.log('\n✨ Done!');
    }
}

captureScrollPosition0().catch(console.error);
