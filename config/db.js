
import mongoose from "mongoose";

const connectDB = async (mongoUri) => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_URI is missing");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB Atlas successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;
