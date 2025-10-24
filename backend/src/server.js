import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
dotenv.config();

const app = express();
console.log(process.env.PORT);
const PORT = process.env.PORT || 3333;

app.use("/api/auth", authRoutes);



app.listen(PORT, () => console.log("Server listening on port:", PORT));