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
  comments: [
    {
      author_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      authorName: {
        type: String,
        required: true,
        minLength: 2,
      },
      commentText: {
        type: String,
        required: true,
        minLength: 4,
      },
      timeStamp: {
        type: Date,
        required: true,
        default: Date.now,
      },
    },
  ],
});

export { storySchema };
