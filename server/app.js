import express from "express";
import cors from "cors";

import roleRoutes from "./routes/roleRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import personRoutes from "./routes/personRoutes.js";
import skillGapRoutes from "./routes/skillGapRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/roles", roleRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/persons",personRoutes);
app.use("/api/skill-gap", skillGapRoutes);
app.use("/api/roadmap",roadmapRoutes);
app.use("/api/mentors", mentorRoutes);

export default app;