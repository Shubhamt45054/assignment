import express from "express";
import connectDB from "./src/db/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://feedback-form-xyz.netlify.app',
    'https://obliged-jeanie-vikers-of-q-fb1222e7.koyeb.app'
  ],
}));

// json data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

import feedbackRouter from "./src/routes/feedbackroutes.js"
app.use("/api/feedback", feedbackRouter);

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

