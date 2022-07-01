import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: 2,
  },
  subject: {
    type: String,
    required: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
  },
});

export { contactSchema };
