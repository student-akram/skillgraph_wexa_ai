import express from "express";

import {
  fetchRoles,
  fetchRoleById
} from "../controllers/roleController.js";

const router = express.Router();

router.get("/", fetchRoles);

router.get("/:id", fetchRoleById);

export default router;