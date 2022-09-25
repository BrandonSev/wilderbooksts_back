import express from "express";
import WilderController from "./src/controllers/WilderController";
import SkillController from "./src/controllers/SkillController";
import GradeController from "./src/controllers/GradeController";
import datasource from "./src/utils";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/wilders", WilderController);
app.use("/api/skills", SkillController);
app.use("/api/grades", GradeController);

// Ecoute du serveur
app.listen(8000, async () => {
  await datasource.initialize();
  console.log("Server running on port 8000");
});
