import { languageCollections } from "../../models/languages/language.models.js";
import { translator } from "../../translate/translator.js";

export const translateStory = async (languageCode, textToTranslate) => {
    const translatedStory = await translator(languageCode, textToTranslate);
    return translatedStory;
};

export const createTranslatedStory = async (story, languageCode, language) => {
    const translateStoryTitle = await translateStory(languageCode, story.title);
    const translateStoryContent = await translateStory(
        languageCode,
        story.storyContent
    );

    const newTranslatedStory = await new languageCollections[language]({
        _id: story.id,
        title: translateStoryTitle.text,
        region: story.region,
        storyContent: translateStoryContent.text,
        language: languageCode,
        originStory: story,
        comments: story.comments,
    });
    return newTranslatedStory;
};
