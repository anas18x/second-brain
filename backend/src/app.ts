import express from "express"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import cors from "cors"

import v1Routes from "./routes/v1/index.js"
import errorMiddleware from "./middleware/error.Middleware.js"


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  skip: (req) => req.method === "OPTIONS",
  message: "Too many requests from this IP, please try again later.",
})

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
)

app.use(limiter)

app.use("/api/v1", v1Routes)

app.use(errorMiddleware)

export default app