import express from "express";
import cors from "cors";

import roleRoutes from "./routes/roleRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import personRoutes from "./routes/personRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/roles", roleRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/persons",personRoutes);

export default app;