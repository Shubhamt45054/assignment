import { Feedback } from "../models/feedbackmodel.js";

export const createFeedback = async (req, res) => {
    
    const { fullname, email, message } = req.body;

    try{
        
    if ( !fullname.trim() || !email.trim() || !message.trim() ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const feedback = await Feedback.create({ fullname, email, message });
    res
    .status(201)
    .json(feedback);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const getFeedback = async (req, res) => {
    const feedback = await Feedback.find();
    res
    .status(200).
    json(feedback);
}



