import mongoose from "mongoose";
import { languageSchema } from "./language-schema.js";

languageSchema.methods.toJSON = function () {
  const lang = this;
  lang.comments = lang.comments.commnets;
  return lang;
};

const languages = ["Arabic", "Hebrew", "Russians", "French", "Spanish"];
const languageCollections = {};

languages.forEach((lang) => {
  languageCollections[lang] = mongoose.model(lang, languageSchema);
});

export { languageCollections, getTranslated };
