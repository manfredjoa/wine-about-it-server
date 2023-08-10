import mongoose from "mongoose";
//standard email regex pattern
const emailPattern = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;

let userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    trim: true,
    required: true,
  },
  EMail: {
    type: String,
    required: true,
    match: emailPattern,
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
