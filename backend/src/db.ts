import mongoose from "mongoose";
import { ENV } from "./config/ENV.config.js";

export async function connectDB() {
  try {
    console.log("DB: attempting connection");

    await mongoose.connect(ENV.MONGO_URI);

    console.log("DB: connected successfully");
  } catch (error) {
    console.error("DB: connection failed", error);
    throw error;
  }
}