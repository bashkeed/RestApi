import mongoose from "mongoose";
import connectDB from './db/db.js'
import User from'./models/user.js'
import express from 'express'
import dotenv from 'dotenv'

import { createUser, getUsers } from "./controllers/userControllers.js";
import userRouter from "./routes/userRoutes.js";

const app = express()
app.use(express.json())
dotenv.config()
connectDB()

app.get('/', (req,res)=>{
    res.send('<h2>Testing Server</h2>')
})

app.use("/api/users", userRouter);

const path = 3003
app.listen(path, ()=>{
    console.log(`server successfully running on port ${path}`)
})
