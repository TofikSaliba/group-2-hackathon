import express from "express";
import { getForm } from "../controllers/contact.controllers.js";

const contactRouter = express.Router();

contactRouter.post("/submit", getForm);

export { contactRouter };
