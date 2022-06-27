import puppeteer from "puppeteer";
import fs from "fs";

async function scrapData() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://fairytalez.com/regions/");

  const categories = await page.$$eval(".alphabet-item a", (cats) => {
    return cats.map((catTag) => {
      return { categoryName: catTag.innerText, categoryLink: catTag.href };
    });
  });

  for (const category of categories) {
    await page.goto(category.categoryLink);
    const storyNames = await page.$$eval(
      ".alphabet-section li a",
      (stories) => {
        return stories.map((storyTag) => {
          return { storyNames: storyTag.innerText, storyLinks: storyTag.href };
        });
      }
    );
    category.storyNames = storyNames;
  }
  // console.log(categories);
  fs.writeFileSync("test.json", JSON.stringify(categories));

  browser.close();
}

scrapData();
