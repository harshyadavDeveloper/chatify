import express from "express";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import path from 'path';
import {connectDB} from './lib/db.js';
import {ENV} from "./lib/env.js";

const app = express();
const __driname = path.resolve();
console.log(ENV.PORT);
const PORT = ENV.PORT || 3333;
app.use(express.json()); // req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if(ENV.NODE_ENV === 'production'){
    app.use(express.static(path.join(__driname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__driname, "../frontend","dist", "index.html"));
    })
}



app.listen(PORT, () => {
    connectDB();
});