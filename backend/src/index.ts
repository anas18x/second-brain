import express from 'express';
import { connectDB } from './db.js';
import { ENV } from './config/ENV.config.js';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import v1Routes from './routes/v1/index.js';
import errorMiddleware from './middleware/error.Middleware.js';
import cors from 'cors';


const limiter = rateLimit({
    windowMs : 15 * 60 * 1000,      // 15 min
    limit : 100,                   // max 100 requests per windowMs
    skip : (req) => req.method === "OPTIONS",
    message : 'Too many requests from this IP, please try again later.'
}) 


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

app.use(limiter);

app.use("/api/v1", v1Routes);

app.use(errorMiddleware);

(async () => {
    await connectDB()
    app.listen(ENV.PORT, () => {
        console.log(`Server is running on port ${ENV.PORT}`)
    })
})()


