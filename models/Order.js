// items:[], ref object
// total:Number
//user: object

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WineData",
    },
  ],
  total: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Order", orderSchema);
