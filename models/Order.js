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
  shippingAddress: {
    firstName: String,
    lastName: String,
    streetAddress: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
  },
  cartQuantity: {
    type: Number,
  },
  creditCard: {
    creditCardNumber: String,
    expiration: String,
    cVC: String,
  },
  isPaid: {
    type: Boolean,
    default: true,
  },
  isDelivered: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
