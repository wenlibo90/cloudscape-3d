import puppeteer from 'puppeteer';

const url = process.argv[2] || 'http://localhost:4173/';
const out = process.argv[3] || '/tmp/shot.png';
const waitMs = Number(process.argv[4] || 7000);

const launchOptions = {
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--enable-unsafe-swiftshader',
    '--use-gl=angle',
    '--use-angle=swiftshader',
  ],
};

if (process.env.CHROME_BIN) {
  launchOptions.executablePath = process.env.CHROME_BIN;
}

const browser = await puppeteer.launch(launchOptions);

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text());
});
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));
page.on('requestfailed', (r) => errors.push('REQFAIL: ' + r.url()));

await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise((r) => setTimeout(r, waitMs));

const stats = await page.evaluate(() => ({
  labels: document.querySelectorAll('.label').length,
  dockItems: document.querySelectorAll('.dock-item').length,
  loaderHidden: document.getElementById('loader')?.classList.contains('is-hidden'),
  canvases: document.querySelectorAll('canvas').length,
  webgl: (() => {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    return gl ? gl.getParameter(gl.VERSION) : 'none';
  })(),
}));

console.log('STATS: ' + JSON.stringify(stats));
console.log('ERRORS: ' + JSON.stringify(errors.slice(0, 12), null, 2));

await page.screenshot({ path: out });
console.log('saved -> ' + out);
await browser.close();
