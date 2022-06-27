import { createUser } from "../services/user.services.js";
import { User } from "../models/user/user.model.js";

export const addUser = async (req, res) => {
  try {
    if (req.body.admin) {
      throw new Error("Cannot set admin to true by user!");
    }
    if (req.body.credit || req.body.cash) {
      throw new Error(
        "Cannot set cash or credit! new user has no accounts yet."
      );
    }
    const newUser = await createUser(req.body);
    const token = await newUser.generateAuthToken();
    res.status(201).json({ newUser, token });
  } catch (err) {
    res.status(400).json({ code: 400, message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      throw new Error("Must provide email and password!");
    }
    const user = await User.findByCredentials(
      req.body.email.toLowerCase(),
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.json({ user, token });
  } catch (err) {
    res.status(400).json({ code: 400, message: err.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.json({ message: "successfully logged out!" });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};

export const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.json({ message: "successfully logged out from all sessions!" });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    if (req.user.cash < 0) {
      throw new Error("User is in dept cannot delete! take care of it first.");
    }
    await req.user.remove();
    res.json({
      deletedUser: req.user,
    });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    res.json({ requestedUser: req.user });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};

export const editProfile = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowed = ["name", "email", "password"];
    const isValid = updates.every((update) => allowed.includes(update));
    if (!isValid) {
      throw new Error("Invalid updates");
    }
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json({ updatedUser: req.user });
  } catch (err) {
    res.status(500).json({ code: 500, message: err.message });
  }
};
