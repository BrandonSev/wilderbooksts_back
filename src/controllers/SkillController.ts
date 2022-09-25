import { Request, Response, Router } from "express";
import SkillService from "../services/SkillService";

const router = Router();

// Route récupération des skills
router.get("/", async (req: Request, res: Response) => {
  try {
    const skills = await SkillService.getAll();
    return res.send(skills);
  } catch (err) {
    return res.send(err);
  }
});

// Route création d'un skills
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const skills = await SkillService.create({
      name,
    });
    return res.send(skills);
  } catch (err) {
    return res.status(422).send(err);
  }
});

// Route suppression d'un skills
router.delete("/:id", async (req: Request, res: Response) => {
  await SkillService.remove(+req.params.id);
  return res.sendStatus(204);
});

export default router;
