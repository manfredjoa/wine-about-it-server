import mongoose from "mongoose";
//standard email regex pattern
const emailPattern = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;

let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  EMail: {
    type: String,
    required: true,
    match: emailPattern,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  Password: {
    type: String,
    required: true,
    minlength: 8,
  },
  Favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WineData",
    },
  ],
});

export default mongoose.model("User", userSchema);
