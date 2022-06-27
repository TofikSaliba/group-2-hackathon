import express from "express";

import {
  addUser,
  // loginUser,
  // logoutUser,
  // logoutAll,
  deleteUser,
  getUserProfile,
  editProfile,
} from "../controllers/user.controllers.js";

const usersRouter = express.Router();

usersRouter.post("/signUp", addUser);
// usersRouter.post("/login", loginUser);
// usersRouter.post("/logout", logoutUser);
// usersRouter.post("/logoutAll", logoutAll);

usersRouter.get("/profile", getUserProfile);
usersRouter.patch("/editProfile", editProfile);
usersRouter.delete("/deleteUser", deleteUser);

export { usersRouter };
