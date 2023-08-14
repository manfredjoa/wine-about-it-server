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
  email: {
    type: String,
    required: true,
    match: emailPattern,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WineData",
    },
  ],
  shippingAddress: {
    streetAddress: {
      type: String,
    },
    streetAddress2: { type: String },

    city: {
      type: String,
    },
    state: { type: String },

    postalCode: {
      type: Number,
    },
  },
});

export default mongoose.model("User", userSchema);
