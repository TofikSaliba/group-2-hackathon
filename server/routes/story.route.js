import express from "express";
import { getStoryById } from "../controllers/story.controllers.js";

export const storyRouter = express.Router();

storyRouter.get("/getStory", getStoryById);
// storyRouter.post("/comment", createCommentToStory);
