import mongoose from "mongoose";
import { storySchema } from "./story.schema.js";

const Story = mongoose.model("Story", storySchema);
export { Story };
