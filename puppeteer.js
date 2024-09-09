import puppeteer from "puppeteer";
import { setTimeout } from "node:timers/promises";
import fs from "node:fs/promises";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the viewport to a larger size to ensure SVG scales properly
  await page.setViewport({ width: 610, height: 610 });

  // Loop through URLs 1 to 150
  for (let i = 55; i <= 150; i++) {
    try {
      await page.goto("http://localhost:1235", { timeout: 0 });
    } catch (e) {
      //
    }
    const url = `http://localhost:1234#${i}`;
    await page.goto(url);

    // Wait for 1 second to allow page and SVG to render
    await setTimeout(1000);

    // Ensure SVG or any element is rendered fully by waiting for it
    await page.waitForSelector("svg"); // You can change 'svg' to any specific selector

    // Take the screenshot after the page has rendered
    await page.screenshot({
      path: `./screenshots/screenshot_${i}.png`,
      clip: {
        x: 0,
        y: 0,
        width: 600,
        height: 600,
      },
    });

    console.log(`Screenshot for ${url} saved.`);
  }

  await browser.close();
})();
