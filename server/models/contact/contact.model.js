import mongoose from "mongoose";
import { contactSchema } from "./contact-schema.js";

const Contact = mongoose.model("Contact", contactSchema);

export { Contact };
