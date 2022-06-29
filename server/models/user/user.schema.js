import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email!");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  savedLanguage: {
    type: String,
    default: "English",
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  savedProgress: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

export { userSchema };
