import { languageCollections } from "../models/languages/language.models.js";
import { Story } from "../models/story/story.model.js";
import { createTranslatedStory } from "../services/story/story.services.js";

export const getStoryById = async (req, res) => {
    const { storyId, language, languageCode } = req.query;

    try {
        if (language === "English") {
            const story = await Story.findById(storyId);
            if (!story) {
                console.log(storyId);
                throw new Error();
            }
            return res.status(200).send(story);
        }
        const isStoryTranslated = await languageCollections[language].findById(
            storyId
        );

        if (!isStoryTranslated) {
            const story = await Story.findById(storyId);
            if (!story) throw new Error();
            const newTranslatedStory = await createTranslatedStory(
                story,
                languageCode,
                language
            );
            await newTranslatedStory.save();
            return res.status(200).send(newTranslatedStory);
        }

        const populateStory = await isStoryTranslated.populate(
            "originStory",
            "comments"
        );
        res.status(200).send(populateStory);
    } catch (error) {
        console.error(error);
        res.status(404).send("Story Not found");
    }
};
