import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("returnOriginal", false);

const connectString =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/wineAboutIt";

mongoose.connect(connectString).catch((err) => {
  console.error("Error connecting to database", err);
});

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
