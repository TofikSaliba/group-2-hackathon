import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  region: {
    type: String,
    required: true,
    minLength: 2,
  },
  storyContent: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Story",
  },
  comments1: {
    type: Array,
    default: [],
  },
});

export { languageSchema };
