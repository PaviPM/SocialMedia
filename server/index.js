import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors  from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"
import UploadRoute from "./Routes/UploadRoute.js";

const app = express();

// to serve image for public
app.use(express.static("public"))
app.use("/images",express.static("images"))

dotenv.config();
app.use(cors());

app.use(express.json())

mongoose.connect(process.env.MONGO_DB)
.then(()=>app.listen(process.env.PORT,()=>{
    console.log(`Connected at ${process.env.PORT}`)
}))
.catch((error) =>{console.log(error)});

app.use("/auth", AuthRoute)
app.use("/user", UserRoute)
app.use("/post", PostRoute)
app.use("/upload", UploadRoute)

