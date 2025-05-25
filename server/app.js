import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import summarizeRoutes from "./routes/summarizeRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
const app = express();

app.use(json());
app.use(cors());

app.use("/api", summarizeRoutes);
app.use("/", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
