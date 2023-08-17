import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      wineDataId: { type: mongoose.Schema.Types.ObjectId, ref: "WineData" },
      qty: {
        type: Number,
      },
    },
  ],
  total: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  shippingAddress: {
    firstName: String,
    lastName: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
  },
  cartQuantity: {
    type: Number,
  },
  isPaid: {
    type: Boolean,
    default: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  isShipped: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Order", orderSchema);
