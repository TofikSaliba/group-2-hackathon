import mongoose from "mongoose";
import "dotenv/config";
import { userSchema } from "./user.schema.js";

const User = mongoose.model("User", userSchema);

export { User };
