import { languageCollections } from "../models/languages/language.models.js";
import { Story } from "../models/story/story.model.js";

export const getStoryById = async (req, res) => {
    const { storyId, language } = req.query;
    console.log(req.query.storyId);
    try {
        const isStoryTranslated = await languageCollections[language].findById(
            storyId
        );
        const newStory = await isStoryTranslated.populate(
            "originStory",
            "comments"
        );
        if (!isStoryTranslated) {
            const story = await Story.findById(storyId);
            console.log(story);
            if (!story) throw new Error();
            return res.status(200).send(story);
        }

        res.status(200).send(newStory);
    } catch (error) {
        res.status(404).send("Story Not found");
    }
};
