import mongoose from "mongoose";

const WineData = new mongoose.Schema({
  WineName: {
    type: String,
  },
  Price: {
    type: Number,
  },
  CountryState: {
    type: String,
  },
  Region: {
    type: String,
  },
  ProductType: {
    type: String,
  },
  VarietalType: {
    type: String,
  },
  Description: {
    type: String,
  },
  img: {
    type: String,
  },
  flag: {
    type: String,
  },
});

export default mongoose.model("WineData", WineData);
