const { chromium } = require('playwright');

async function testInBrave() {
    console.log('🧪 Testing scroll animations in Chromium (Brave-like)...\n');

    const browser = await chromium.launch({
        headless: true,
        args: [
            '--disable-blink-features=AutomationControlled',
            '--enable-features=NetworkService,NetworkServiceInProcess'
        ]
    });

    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();

    try {
        console.log('📄 Loading page...');
        await page.goto('https://jedarden.github.io/jedarden.com/', {
            waitUntil: 'networkidle',
            timeout: 30000
        });

        // Check if GSAP loaded
        const gsapLoaded = await page.evaluate(() => {
            return typeof gsap !== 'undefined';
        });
        console.log(`📦 GSAP loaded: ${gsapLoaded ? '✅' : '❌'}`);

        // Check if ScrollTrigger loaded
        const scrollTriggerLoaded = await page.evaluate(() => {
            return typeof ScrollTrigger !== 'undefined';
        });
        console.log(`📦 ScrollTrigger loaded: ${scrollTriggerLoaded ? '✅' : '❌'}`);

        // Check logo at scroll 0
        console.log('\n📍 Testing at scroll position 0:');
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(1000);

        const logoAtTop = await page.evaluate(() => {
            const logo = document.querySelector('.floating-logo');
            const style = window.getComputedStyle(logo);
            return {
                opacity: style.opacity,
                top: style.top,
                left: style.left,
                visible: logo.offsetWidth > 0 && logo.offsetHeight > 0
            };
        });
        console.log('  Logo state:', logoAtTop);

        // Scroll down to first project
        console.log('\n📍 Scrolling to first project...');
        await page.evaluate(() => window.scrollTo(0, 1500));
        await page.waitForTimeout(2000);

        const logoAfterScroll = await page.evaluate(() => {
            const logo = document.querySelector('.floating-logo');
            const style = window.getComputedStyle(logo);
            const visualContainer = document.querySelector('.visual-container');
            const visualStyle = visualContainer ? window.getComputedStyle(visualContainer) : null;

            return {
                logo: {
                    opacity: style.opacity,
                    transform: style.transform,
                    top: style.top
                },
                visual: visualStyle ? {
                    opacity: visualStyle.opacity,
                    transform: visualStyle.transform
                } : null
            };
        });
        console.log('  After scroll:', JSON.stringify(logoAfterScroll, null, 2));

        // Check for JavaScript errors
        const errors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(msg.text());
            }
        });

        page.on('pageerror', error => {
            errors.push(error.message);
        });

        await page.waitForTimeout(1000);

        if (errors.length > 0) {
            console.log('\n❌ JavaScript Errors Found:');
            errors.forEach(err => console.log(`  - ${err}`));
        } else {
            console.log('\n✅ No JavaScript errors detected');
        }

        // Take screenshot
        await page.screenshot({ path: '/home/coder/jedarden.com/test-brave-screenshot.png' });
        console.log('\n📸 Screenshot saved: test-brave-screenshot.png');

    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
    } finally {
        await browser.close();
    }
}

testInBrave().catch(console.error);
