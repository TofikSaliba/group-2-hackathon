import express from "express";
import { getStoryById } from "../controllers/story.controllers.js";
import { splitContent } from "../middleware/story/splitContent.js";

export const storyRouter = express.Router();

storyRouter.get("/getStory", splitContent, getStoryById);
// storyRouter.post("/comment", createCommentToStory);
