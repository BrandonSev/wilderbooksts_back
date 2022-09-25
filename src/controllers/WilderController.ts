import { Request, Response, Router } from "express";
import WilderService from "../services/WilderService";

const router = Router();

// Route récupération des wilders
router.get("/", async (req: Request, res: Response) => {
  try {
    const wilders = await WilderService.getAll();
    return res.send(wilders);
  } catch (err) {
    return res.send(err);
  }
});

// Route récupération d'un wilder
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const wilder = await WilderService.findOneOrFail(+req.params.id);
    return res.send(wilder);
  } catch (err) {
    return res.status(404).send(err);
  }
});

// Route création d'un wilder
router.post("/", async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, description, avatar, skills } = req.body;
    const wilder = await WilderService.create({
      firstname,
      lastname,
      description,
      avatar,
      skills,
    });
    return res.status(201).send(wilder);
  } catch (err) {
    return res.status(422).send(err);
  }
});

// Route modification d'un wilder
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, description, avatar, skills } = req.body;
    const wilder = await WilderService.update(+req.params.id, {
      firstname,
      lastname,
      description,
      avatar,
      skills,
    });

    return res.send(wilder);
  } catch (err: any) {
    return res.status(422).send(err.message);
  }
});

// Route suppression d'un wilder
router.delete("/:id", async (req: Request, res: Response) => {
  await WilderService.remove(+req.params.id);
  return res.sendStatus(204);
});

export default router;
