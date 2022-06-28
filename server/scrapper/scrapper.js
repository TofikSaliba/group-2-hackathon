import puppeteer from "puppeteer";
import { Story } from "../models/story/story.model.js";
import { Region } from "../models/region/region.model.js";

async function scrapData() {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto("https://fairytalez.com/regions/");

  const regionsArr = await page.$$eval(".alphabet-item a", (regions) => {
    return regions.map((regTag) => {
      return { regionName: regTag.innerText, regionLink: regTag.href };
    });
  });

  let i = 0;
  for (const region of regionsArr) {
    i++;
    await page.goto(region.regionLink);
    const storiesArr = await page.$$eval(
      ".alphabet-section li a",
      (stories) => {
        return stories.map((storyTag) => {
          return {
            storyName: storyTag.innerText,
            storyLink: storyTag.href,
          };
        });
      }
    );
    let storiesIds = [];
    let storiesLimit = 0;
    for (const story of storiesArr) {
      storiesLimit++;
      await page.goto(story.storyLink);
      const contentParagraphs = await page.$$eval(".entry p", (parags) => {
        return parags.map((paraTag) => {
          return paraTag.innerText;
        });
      });
      story.StoryContent = contentParagraphs.join("\n\n");
      i++;

      try {
        const newStory = new Story({
          title: story.storyName,
          region: region.regionName,
          storyContent: story.StoryContent,
          language: "en",
        });
        await newStory.save();
        storiesIds.push(newStory._id);
      } catch (err) {
        console.log(err.message);
      }

      if (storiesLimit > 9) break;
      if (i % 50 === 0) {
        browser.close();
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
      }
    }

    try {
      const newRegion = new Region({
        regionName: region.regionName,
        stories: storiesIds,
        language: "en",
      });
      newRegion.save();
    } catch (err) {
      console.log(err.message);
    }
  }

  browser.close();
}

export { scrapData };
