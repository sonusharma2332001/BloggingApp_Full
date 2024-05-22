import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRoute from './Routes/user.route.js';
import AuthRoute from './Routes/auth.route.js';
import cookieParser from 'cookie-parser';
import PostRoute from './Routes/Post.Route.js';
import path from "path";

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(
    () => {
        console.log("mongodb is connected")
    }
).catch((e) => {
    console.log("mongo is not connected")
});

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000' 
}));


app.listen(process.env.PORT, () => {
    console.log('Server is Running on port',process.env.PORT)
});

app.use('/api/user', UserRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/post',PostRoute);

app.use(express.static(path.join(__dirname,'Client/dist')));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"Client","dist","index.html"));
});

app.use((error, req, res, next) => {
    const statuscode = error.statuscode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statuscode).json({
        success: false,
        statuscode,
        message,
    })
});

    // "build": "npm install && npm install --prefix Client && npm run build --prefix Client"