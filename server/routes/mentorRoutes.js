import express from "express";

import { getMentors } from "../controllers/mentorController.js";

const router = express.Router();

router.post("/", getMentors);

export default router;