const { chromium } = require('playwright');

async function testIconPositions() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    console.log('📱 Loading website...');
    await page.goto('https://jedarden.github.io/jedarden.com/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const projects = [
        'forge', 'sunsim', 'face', 'gait', 'options',
        'newstrading', 'asteroid', 'clasp', 'ccdash', 'ducke', 'mana', 'ringmaster'
    ];

    console.log('\n=== 🎯 Apple-Style Icon Position Testing ===\n');

    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = page.viewportSize().height;
    const viewportWidth = page.viewportSize().width;

    for (const projectName of projects) {
        console.log(`\n📍 Testing ${projectName.toUpperCase()}...`);

        const showcase = page.locator(`[data-project="${projectName}"]`);
        const icon = showcase.locator('.project-icon');

        // Get showcase bounds
        const showcaseBox = await showcase.boundingBox();
        if (!showcaseBox) {
            console.log(`  ❌ Could not find showcase for ${projectName}`);
            continue;
        }

        console.log(`  Showcase: ${showcaseBox.y.toFixed(0)}px - ${(showcaseBox.y + showcaseBox.height).toFixed(0)}px (${showcaseBox.height.toFixed(0)}px tall)`);

        // Test 5 points through the showcase: start, onramp, middle (pinned), offramp, end
        const testPoints = [
            { name: 'Start (before onramp)', offset: 0 },
            { name: 'Onramp (25%)', offset: 0.25 },
            { name: 'Pinned (50%)', offset: 0.5 },
            { name: 'Offramp (75%)', offset: 0.75 },
            { name: 'End (after offramp)', offset: 1.0 }
        ];

        for (const point of testPoints) {
            const scrollY = showcaseBox.y + (showcaseBox.height * point.offset) - (viewportHeight * 0.5);
            await page.evaluate((y) => window.scrollTo(0, y), scrollY);
            await page.waitForTimeout(500); // Wait for GSAP animations

            const iconBox = await icon.boundingBox();
            const isVisible = await icon.isVisible();

            if (iconBox && isVisible) {
                const opacity = await icon.evaluate(el => window.getComputedStyle(el).opacity);
                const transform = await icon.evaluate(el => window.getComputedStyle(el).transform);

                // Parse transform matrix to get scale and rotation
                let scale = 1;
                let rotation = 0;
                if (transform && transform !== 'none') {
                    const values = transform.match(/matrix\(([^)]+)\)/);
                    if (values) {
                        const parts = values[1].split(',').map(parseFloat);
                        const a = parts[0];
                        const b = parts[1];
                        scale = Math.sqrt(a*a + b*b);
                        rotation = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                    }
                }

                const centerX = iconBox.x + iconBox.width / 2;
                const centerY = iconBox.y + iconBox.height / 2;
                const viewportCenterX = viewportWidth / 2;
                const viewportCenterY = viewportHeight / 2;
                const offsetFromCenter = Math.sqrt(
                    Math.pow(centerX - viewportCenterX, 2) +
                    Math.pow(centerY - viewportCenterY, 2)
                );

                console.log(`  ${point.name}:`);
                console.log(`    Position: (${iconBox.x.toFixed(0)}, ${iconBox.y.toFixed(0)})`);
                console.log(`    Center: (${centerX.toFixed(0)}, ${centerY.toFixed(0)}) - ${offsetFromCenter.toFixed(0)}px from viewport center`);
                console.log(`    Opacity: ${parseFloat(opacity).toFixed(2)}`);
                console.log(`    Scale: ${scale.toFixed(2)}x`);
                console.log(`    Rotation: ${rotation}°`);

                // Validation
                if (point.offset >= 0.3 && point.offset <= 0.7) {
                    // Should be pinned in center during middle section
                    if (offsetFromCenter > 50) {
                        console.log(`    ⚠️  Icon not centered (${offsetFromCenter.toFixed(0)}px off)`);
                    } else {
                        console.log(`    ✅ Properly centered`);
                    }
                    if (parseFloat(opacity) < 0.95) {
                        console.log(`    ⚠️  Opacity should be near 1.0 when pinned`);
                    }
                }
            } else {
                console.log(`  ${point.name}: ❌ Icon not visible`);
            }
        }
    }

    console.log('\n=== 📊 Continuous Scroll Analysis ===\n');

    // Sample positions throughout entire page
    const samples = 50;
    const results = [];

    for (let i = 0; i <= samples; i++) {
        const scrollPos = (pageHeight * i) / samples;
        await page.evaluate((y) => window.scrollTo(0, y), scrollPos);
        await page.waitForTimeout(100);

        // Count visible icons
        const visibleIcons = await page.evaluate(() => {
            const icons = document.querySelectorAll('.project-icon');
            let count = 0;
            icons.forEach(icon => {
                const rect = icon.getBoundingClientRect();
                const opacity = parseFloat(window.getComputedStyle(icon).opacity);
                if (opacity > 0.1 && rect.top < window.innerHeight && rect.bottom > 0) {
                    count++;
                }
            });
            return count;
        });

        const percentScroll = ((scrollPos / pageHeight) * 100).toFixed(1);
        results.push({ percent: percentScroll, visibleIcons });

        if (visibleIcons > 1) {
            console.log(`⚠️  ${percentScroll}% scroll: ${visibleIcons} icons visible (should be 0-1)`);
        }
    }

    // Summary
    const multipleVisible = results.filter(r => r.visibleIcons > 1);
    if (multipleVisible.length > 0) {
        console.log(`\n❌ Found ${multipleVisible.length} scroll positions with multiple icons visible`);
    } else {
        console.log(`\n✅ No overlapping icons detected`);
    }

    console.log('\n=== 🎬 Test Complete ===');
    console.log('Browser will remain open for 30 seconds for manual inspection...\n');

    await page.waitForTimeout(30000);
    await browser.close();
}

testIconPositions().catch(console.error);
