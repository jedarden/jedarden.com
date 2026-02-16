const { chromium } = require('playwright');

async function reviewSunSim() {
    console.log('🌞 Reviewing Sun Simulator...\n');

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
        viewport: { width: 1920, height: 1080 }
    });

    try {
        console.log('📄 Loading sunsim.jedarden.com...');
        await page.goto('https://sunsim.jedarden.com', {
            waitUntil: 'networkidle',
            timeout: 30000
        });

        // Take initial screenshot
        await page.screenshot({ path: 'sunsim-screenshot-1.png' });
        console.log('📸 Screenshot 1: Initial view');

        // Wait a bit for any animations
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'sunsim-screenshot-2.png' });
        console.log('📸 Screenshot 2: After 2s');

        // Get page structure
        const structure = await page.evaluate(() => {
            return {
                title: document.title,
                bodyHTML: document.body.innerHTML.substring(0, 2000),
                canvases: Array.from(document.querySelectorAll('canvas')).map(c => ({
                    id: c.id,
                    class: c.className,
                    width: c.width,
                    height: c.height
                })),
                scripts: Array.from(document.querySelectorAll('script[src]')).map(s => s.src)
            };
        });

        console.log('\n📊 Page Structure:');
        console.log('Title:', structure.title);
        console.log('Canvases:', structure.canvases);
        console.log('Scripts:', structure.scripts.slice(0, 5));

        // Look for sun simulation elements
        const sunElements = await page.evaluate(() => {
            const elements = {
                compass: !!document.querySelector('.compass-rose'),
                sunPath: !!document.querySelector('.sun-path'),
                controls: !!document.querySelector('.controls'),
                canvas: !!document.querySelector('canvas')
            };

            // Try to get any visible text
            const bodyText = document.body.innerText.substring(0, 500);

            return { elements, bodyText };
        });

        console.log('\n🔍 Sun Simulator Elements:', sunElements.elements);
        console.log('\n📝 Page Text Preview:', sunElements.bodyText.substring(0, 200));

        // Try scrolling and taking more screenshots
        await page.evaluate(() => window.scrollTo(0, 300));
        await page.waitForTimeout(1000);
        await page.screenshot({ path: 'sunsim-screenshot-3.png' });
        console.log('📸 Screenshot 3: Scrolled view');

        console.log('\n✅ Review complete - check sunsim-screenshot-*.png files');

    } catch (error) {
        console.error('\n❌ Error:', error.message);
    } finally {
        await browser.close();
    }
}

reviewSunSim().catch(console.error);
