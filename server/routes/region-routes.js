import express from "express";
import { getAllRegions } from "../controllers/region.controllers.js";

import { auth } from "../middleware/auth/auth.js";

const regionRouter = express.Router();

// regionRouter.get("/getRegion", getRegion);
regionRouter.get("/getAllRegions", getAllRegions);

export { regionRouter };
