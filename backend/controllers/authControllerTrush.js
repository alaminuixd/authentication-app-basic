import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  // check req.body fields validation
  const { username, email, password } = await req.body;
  if ((!username, !email, !password)) {
    return res.status(400).json({ message: "All fields are required!" });
  }
  try {
    // Check if user already exists in the User model document
    const existingUser = User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    // create and save new user
    const hashedPassword = bcrypt(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    // response new user
    res.status(201).json({ message: "User created Sucessfully" });
  } catch (error) {
    console.log("Server Error!", error);
    res
      .status(500)
      .json({ message: "Failed registering new user", error: error.message });
  }
};

const login = async (req, res) => {
  // check fields validation
  try {
    // check user exists
    // check password matched
  } catch (error) {}
};
