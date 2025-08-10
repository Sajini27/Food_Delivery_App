// backend/server.js
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config.js'

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/image", express.static("uploads"));
app.use("/api/user",userRouter)

app.get("/", (req, res) => {
    res.send("API Working");
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server started at http://localhost:${port}`);
});
