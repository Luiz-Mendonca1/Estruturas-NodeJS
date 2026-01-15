import { Router, Request, Response } from "express";

const router = Router();

const task=['task1','task2','task3'];

router.get("/task", (req: Request, res: Response) => {

  res.json(task);

});

router.get("/task/:id", (req: Request, res: Response) => {

  const id = req.params.id;

  res.json({task: task[Number(id)]});
});

// cadastrar

router.post("/task", (req: Request, res: Response) => {

  const { name } = req.body;

  console.log(name);

  res.json({ ok: true });
});
export default router;