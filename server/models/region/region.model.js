import mongoose from "mongoose";
import { regionSchema } from "./region.schema.js";

const Region = mongoose.model("Region", regionSchema);
export { Region };
