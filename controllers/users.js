import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// for development purposes
let SALT_ROUNDS = 11;
let TOKEN_KEY = "areallylonggoodkey";

// for production
if (process.env.NODE_ENV === "production") {
  SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
  TOKEN_KEY = process.env.TOKEN_KEY;
}

// for JWT expiration
const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const registerUser = async (req, res) => {
  const { firstName, lastName, dateOfBirth, email, password } = req.body;
  let user;

  try {
    // check if user already exists
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      dateOfBirth,
      favorites: [],
      shippingAddress: {
        streetAddress: "",
        streetAddress2: "",
        city: "",
        state: "",
        postalCode: "",
      },
    });

    await user.save();

    const payload = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findByIdAndDelete(_id);

    if (!user) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUserFavoritesById = async (req, res) => {
  try {
    console.log("params:", req.params);
    console.log("body:", req.body);

    const { _id } = req.params;
    const { Favorites: favorite } = req.body;
    console.log("favorite:", favorite);

    if (!favorite) {
      return res.status(400).json({ message: "Favorite Wine not provided" });
    }

    const wine = await User.findByIdAndUpdate(
      _id,
      { $push: { Favorites: favorite } },
      { new: true }
    );

    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    res.json({ message: "Wine favorites updated successfully", wine });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
