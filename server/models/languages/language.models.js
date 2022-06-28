import mongoose from "mongoose";
import { languageSchema } from "./language-schema.js";

const languages = ["Arabic", "Hebrew", "Russians", "French", "Spanish"];

const languageCollections = {};

languages.forEach((lang) => {
  languageCollections[lang] = mongoose.model(lang, languageSchema);
});

export { languageCollections };
