import mongoose from "mongoose"
import { ENV } from "./config/ENV.config.js"

let dbInitialized = false

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return
  }

  await mongoose.connect(ENV.MONGO_URI)

  dbInitialized = true
}

export function getDBStatus() {
  return {
    readyState: mongoose.connection.readyState,
    dbInitialized,
  }
}