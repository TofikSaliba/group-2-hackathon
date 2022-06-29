import express from "express";
import { getRegion } from "../controllers/region.controllers.js";

import { auth } from "../middleware/auth/auth.js";

const regionRouter = express.Router();

regionRouter.get("/", getRegion);

export { regionRouter };
