import mongoose from "mongoose";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userSchema } from "./user.schema.js";

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.tokens;
  delete userObject.password;

  return userObject;
};

userSchema.methods.generateAuthToken = async function (params) {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_TOKEN_SECRET
  );

  user.tokens = user.tokens.concat({ token });

  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Something went wrong");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Something went wrong");

  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
  next();
});

const User = mongoose.model("User", userSchema);
export { User };
