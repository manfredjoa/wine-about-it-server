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

//posts
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
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      favorites: user.favorites,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // select() is used to explicitly select which field will be returned
    const user = await User.findOne({ email }).select(
      "firstName lastName dateOfBirth email password favorites"
    );
    if (!user) {
      return res.status(404).json({ message: "Invalid Email or Password" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        favorites: user.favorites,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).json({
        message: "User registered successfully",
        error: "Invalid Credentials",
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message });
  }
};
// gets
export const getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Invalid User ID" });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
//delete user
export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
//put <3
export const updateUserFavoritesById = async (req, res) => {
  try {
    const { id } = req.params;
    const { favorites: favorite } = req.body;

    if (!favorite) {
      return res.status(400).json({ message: "Favorite Wine not provided" });
    }

    const wine = await User.findByIdAndUpdate(
      id,
      { $push: { favorites: favorite } },
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

export const deleteUserFavoritesById = async (req, res) => {
  try {
    const { id } = req.params;
    const { favorites: favorite } = req.body;

    if (!favorite) {
      return res.status(400).json({ message: "Favorite Wine not provided" });
    }

    // Instead of using $push to add the favorite, we use $pull to remove the favorite
    const wine = await User.findByIdAndUpdate(
      id,
      { $pull: { favorites: favorite } }, // Changed $push to $pull
      { new: true }
    );

    if (!wine) {
      return res.status(404).json({ message: "Invalid ID" });
    }

    res.json({ message: "Wine favorites removed successfully", wine });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
//verify
export const verify = async (req, res) => {
  try {
    // Check if the authorization header exists
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const payload = jwt.verify(token, TOKEN_KEY);
      if (payload) {
        res.json(payload);
      }
    } else {
      // Handle the case where the authorization header is missing
      res.status(401).send("Authorization header missing");
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};
