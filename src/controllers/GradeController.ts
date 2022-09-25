import { Request, Response, Router } from "express";
import GradeService from "../services/GradeService";

const router = Router();

// Route création d'un skills
router.post("/:gradeId/increment", async (req: Request, res: Response) => {
  const { gradeId } = req.params;
  await GradeService.increment(+gradeId);
  return res.sendStatus(200);
});

export default router;
