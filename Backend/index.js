import express from 'express';
import dotenv from 'dotenv';
import dataconnect from './Config/database.js';
import cookieParser from 'cookie-parser';
import userRoute from './Router/UserRoute.js';
import TweetRoute from './Router/TweetRoute.js';
import cors from 'cors';

dotenv.config({
    path: ".env"
});

// Connect to database
dataconnect();

// Initialize Express app
const app = express();

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cookieParser());

// Correct CORS configuration
const corsoption = {
    origin: "https://twitter-clone-interface.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsoption));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", TweetRoute);

// Simple test route
app.get("/home", (req, res) => {
    return res.status(200).json({
        message: "Coming from backend...",
        success: true
    });
});
app.get('/', (req, res) => {
    res.send('Welcome to the TwitterClone API');
});

// No need for app.listen on Vercel
export default app;
