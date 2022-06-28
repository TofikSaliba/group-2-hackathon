import mongoose from "mongoose";

const regionSchema = new mongoose.Schema({
  regionName: {
    type: String,
    required: true,
    index: true,
    unique: true,
    minLength: 2,
  },
  stories: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  language: {
    type: String,
    required: true,
  },
});

export { regionSchema };
