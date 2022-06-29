// Todo

// editProfile,
// logoutAll, ?

import { User } from "../models/user/user.model.js";

export const signUpUser = async (req, res) => {
  const userBody = req.body;
  try {
    const newUser = new User(userBody);
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(404).send("Error: User not found");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    if (!user) throw new Error("Error: User not found");
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(401).send(error);
  }
};

export const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );
    await req.user.save();
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch {
    res.status(400).send(userFound);
  }
};

export const editProfile = async (req, res) => {
  //please check
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
};
