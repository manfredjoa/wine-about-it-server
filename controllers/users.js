import User from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { UserName, EMail, Password } = req.body;
  let user;

  try {
    // check if user already exists
    user = await User.findOne({ EMail });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    // hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);

    // create new user
    user = new User({
      UserName,
      EMail,
      Password: hashedPassword,
      Favorites: [],
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
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
