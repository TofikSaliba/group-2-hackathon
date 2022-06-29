import mongoose from "mongoose";
import { languageSchema } from "./language-schema.js";

languageSchema.methods.toJSON = function () {
  console.log("i run");
  const story = this;
  story.comments = story.originStory.comments;
  const newObjStory = story.toObject();
  delete newObjStory.originStory;
  return newObjStory;
};

const languages = ["Arabic", "Hebrew", "Russians", "French", "Spanish"];
const languageCollections = {};

languages.forEach((lang) => {
  languageCollections[lang] = mongoose.model(lang, languageSchema);
});

export { languageCollections };
