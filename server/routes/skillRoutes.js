import express from "express";

import {
  fetchSkills,
  fetchSkillById
} from "../controllers/skillController.js";

const router = express.Router();

router.get("/", fetchSkills);

router.get("/:id", fetchSkillById);

export default router;