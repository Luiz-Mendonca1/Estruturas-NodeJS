import { Router, Request, Response } from "express";

const router = Router();

router.get("/task", (req: Request, res: Response) => {

  const nome = req.query.nome;

  res.json({ message: `Hello, ${nome || "world"}!` });
});

export default router;