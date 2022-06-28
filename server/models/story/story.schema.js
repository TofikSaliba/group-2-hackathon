import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
    unique: true,
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
});

export { storySchema };
