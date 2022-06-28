import express from "express";

import {
  signUpUser,
  logoutUser,
  deleteUser,
  getUserProfile,
  editProfile,
  loginUser,
} from "../controllers/user.controllers.js";
import { auth } from "../middleware/auth/auth.js";

const usersRouter = express.Router();

usersRouter.post("/signUp", signUpUser);
usersRouter.post("/login", loginUser);
usersRouter.post("/logout", auth, logoutUser);
// usersRouter.post("/logoutAll", logoutAll); // Not sure if we need this function

usersRouter.get("/profile", auth, getUserProfile);
usersRouter.patch("/editProfile", auth, editProfile);
usersRouter.delete("/deleteUser", auth, deleteUser);

export { usersRouter };
