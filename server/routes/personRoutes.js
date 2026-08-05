import express from "express";

import {
    fetchPersons,
    fetchPersonById
} from "../controllers/personController.js";

const router=express.Router();

router.get("/",fetchPersons);

router.get("/:id",fetchPersonById);

export default router;