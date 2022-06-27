// addUser,
// loginUser,
// logoutUser,
// logoutAll,
// deleteUser,
// getUserProfile,
// editProfile,
import { User } from "../models/user/user.model.js";

export const addUser = async (res, req) => {
  try {
    const newUser = new User(req.body);
    res.status(200);
    res.send(newUser);
  } catch {
    res.status(400);
  }
};

export const deleteUser = async (res, req) => {
  try {
    const _id = req.body._id;
    const userToDelete = await User.findByIdAndDelete(_id);
    res.status(200);
    res.send(userToDelete);
  } catch {
    res.status(400);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const _id = req.body._id;
    const userFound = await User.findById(_id);
    if (!userFound) throw new Error("The user has not been found!!");
    res.status(200);
    res.send(userFound);
  } catch {
    res.status(400);
  }
};
export const editProfile = async (req, res) => {
  try {
    const _id = req.body._id;
    const fieldsToUpdate = req.body.fieldsToUpdate;
    const userUpdated = await User.findByIdAndUpdate(_id, fieldsToUpdate, {
      new: true,
    });
    res.status(200);
    res.send(userUpdated);
  } catch {
    res.status(400); ///am not sure about the correct error num
  }
};
