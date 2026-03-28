import { chromium } from 'playwright';

const browser = await chromium.launch({
  executablePath: '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome',
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('file:///home/user/test/confirmation-page.html', { waitUntil: 'networkidle' });

// Trigger all fade-up animations
await page.evaluate(() => {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
});
await page.waitForTimeout(500);

// Full page screenshot
await page.screenshot({ path: '/home/user/test/full-page.png', fullPage: true });

// Individual section screenshots
const sections = [
  { name: 'hero', selector: '.hero' },
  { name: 'vsl', selector: '.vsl-section' },
  { name: 'call-steps', selector: 'section:nth-of-type(3)' },
  { name: 'comparison', selector: 'section:nth-of-type(4)' },
  { name: 'proof', selector: '.proof-section' },
  { name: 'breakout-videos', selector: '.breakout-section' },
  { name: 'faq', selector: '.faq-section' },
  { name: 'final-cta', selector: '.final-cta' },
];

for (const s of sections) {
  const el = await page.$(s.selector);
  if (el) {
    await el.screenshot({ path: `/home/user/test/section-${s.name}.png` });
  }
}

await browser.close();
console.log('Done');
