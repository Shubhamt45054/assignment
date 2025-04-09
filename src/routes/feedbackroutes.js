import { Router } from "express";

import { getFeedback, 
        createFeedback } 
        from "../controllers/feedbackcontroller.js";

const router = Router();

router.post("/submit-feedback", createFeedback);
router.get("/feedbacks", getFeedback);

export default router;

