const { chromium } = require('playwright');

async function testPositioning() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the site
    await page.goto('https://jedarden.github.io/jedarden.com/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const projects = [
        'hero', 'forge', 'sunsim', 'face', 'gait', 'options',
        'newstrading', 'asteroid', 'clasp', 'moltbook',
        'ducke', 'ccdash', 'mana', 'ringmaster'
    ];

    console.log('\n=== Logo Position Testing ===\n');

    // Get viewport height for scroll calculations
    const viewportHeight = await page.viewportSize().height;

    // Test each project section
    for (const projectName of projects) {
        if (projectName === 'hero') {
            // Scroll to top
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.waitForTimeout(1000);
        } else {
            // Scroll to project
            const selector = `[data-project="${projectName}"]`;
            try {
                await page.locator(selector).scrollIntoViewIfNeeded();
                await page.waitForTimeout(1500); // Wait for animations

                // Get logo position
                const logoPosition = await page.locator('.floating-logo').boundingBox();

                // Get project card position
                const cardPosition = await page.locator(selector).boundingBox();

                if (logoPosition && cardPosition) {
                    console.log(`\n${projectName.toUpperCase()}:`);
                    console.log(`  Logo: top=${logoPosition.y.toFixed(0)}px, left=${logoPosition.x.toFixed(0)}px`);
                    console.log(`  Logo: ${((logoPosition.x / page.viewportSize().width) * 100).toFixed(1)}vw, ${((logoPosition.y / viewportHeight) * 100).toFixed(1)}vh`);
                    console.log(`  Card: top=${cardPosition.y.toFixed(0)}px`);

                    // Check if logo is visible
                    const isVisible = await page.locator('.floating-logo').isVisible();
                    console.log(`  Logo visible: ${isVisible}`);

                    // Get computed rotation
                    const rotation = await page.locator('.floating-logo').evaluate(el => {
                        const transform = window.getComputedStyle(el).transform;
                        if (transform === 'none') return 0;
                        const values = transform.split('(')[1].split(')')[0].split(',');
                        const a = parseFloat(values[0]);
                        const b = parseFloat(values[1]);
                        return Math.round(Math.atan2(b, a) * (180 / Math.PI));
                    });
                    console.log(`  Logo rotation: ${rotation}°`);
                }
            } catch (error) {
                console.log(`\n${projectName.toUpperCase()}: Error - ${error.message}`);
            }
        }
    }

    // Test transition zones (between projects)
    console.log('\n\n=== Testing Transition Zones ===\n');

    // Scroll through the entire page and sample positions
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    const samples = 20;

    for (let i = 0; i <= samples; i++) {
        const scrollPosition = (pageHeight / samples) * i;
        await page.evaluate((pos) => window.scrollTo(0, pos), scrollPosition);
        await page.waitForTimeout(100);

        const logoPosition = await page.locator('.floating-logo').boundingBox();
        const rotation = await page.locator('.floating-logo').evaluate(el => {
            const transform = window.getComputedStyle(el).transform;
            if (transform === 'none') return 0;
            const values = transform.split('(')[1].split(')')[0].split(',');
            const a = parseFloat(values[0]);
            const b = parseFloat(values[1]);
            return Math.round(Math.atan2(b, a) * (180 / Math.PI));
        });

        if (logoPosition) {
            const percentScroll = ((scrollPosition / pageHeight) * 100).toFixed(1);
            console.log(`${percentScroll}% scroll: pos=(${logoPosition.x.toFixed(0)}, ${logoPosition.y.toFixed(0)}), rot=${rotation}°`);
        }
    }

    console.log('\n=== Test Complete ===\n');

    // Keep browser open for manual inspection
    console.log('Browser will remain open for manual inspection. Close when done.');
    await page.waitForTimeout(60000);

    await browser.close();
}

testPositioning().catch(console.error);
