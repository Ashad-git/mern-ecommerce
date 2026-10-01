import express from 'express';
import mongoose from 'mongoose';
import dotenv, { config } from 'dotenv';
import connectDB from './config/db.js'

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected sucessfully form compass"))
.catch((err)=> console.log('MongoDb not connected error', err));

app.get('/', (req, res) => {
    res.json({message: "The API is running succesfully"})
});

app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});

