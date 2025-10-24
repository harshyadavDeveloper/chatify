import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import path from 'path';
import {connectDB} from './lib/db.js';
dotenv.config();

const app = express();
const __driname = path.resolve();
console.log(process.env.PORT);
const PORT = process.env.PORT || 3333;
app.use(express.json()); // req.body

app.use("/api/auth", authRoutes);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__driname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__driname, "../frontend","dist", "index.html"));
    })
}



app.listen(PORT, () => {
    connectDB();
});