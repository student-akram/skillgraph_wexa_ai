import express from "express";

import { fetchRoadmap } from "../controllers/roadmapController.js";

const router=express.Router();

router.get("/:skill",fetchRoadmap);

export default router;