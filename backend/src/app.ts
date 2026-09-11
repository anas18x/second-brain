import express from "express"
import cookieParser from "cookie-parser"
import { rateLimit } from "express-rate-limit"
import cors from "cors"
import mongoose from "mongoose"

import { ENV } from "./config/ENV.config.js"
import v1Routes from "./routes/v1/index.js"
import errorMiddleware from "./middleware/error.Middleware.js"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  skip: (req) => req.method === "OPTIONS",
  message: "Too many requests from IP, please try again later.",
})

const app = express()

app.set("trust proxy", 1)

app.get("/api/v1/health/db", async (_req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(ENV.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
      })
    }

    res.json({
      mongoReadyState: mongoose.connection.readyState,
      message: "MongoDB connected",
    })
  } catch (error) {
    res.status(500).json({
      mongoReadyState: mongoose.connection.readyState,
      error: error instanceof Error ? error.message : String(error),
    })
  }
})

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: ENV.FRONTEND_URL,
    credentials: true,
  }),
)

app.use(limiter)

app.use("/api/v1", v1Routes)

app.use(errorMiddleware)

export default app