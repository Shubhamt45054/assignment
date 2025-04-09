import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";

const app=express();



dotenv.config();
connectDB()
.then(()=>{  
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})

