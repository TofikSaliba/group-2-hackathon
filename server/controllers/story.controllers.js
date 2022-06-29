import { languageCollections } from "../models/languages/language.models.js";
import { Story } from "../models/story/story.model.js";

export const getStoryById = async (req, res) => {
  const { storyId, language } = req.body;
  try {
    const isStoryTranslated = await languageCollections[language].findById(
      storyId
    );
    if (!isStoryTranslated) {
      const story = await Story.findById(storyId);
      if (!story) throw new Error();
      return res.status(200).send(story);
    }
    res.status(200).send(isStoryTranslated.populate("comments"));
  } catch (error) {
    res.status(404).send("Story Not found");
  }
};
