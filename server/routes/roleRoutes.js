import express from "express";

import { fetchRoles } from "../controllers/roleController.js";

const router = express.Router();

router.get("/", fetchRoles);

export default router;