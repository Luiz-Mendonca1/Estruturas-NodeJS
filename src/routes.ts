import { Router, Request, Response, NextFunction } from "express";

const router = Router();

const task=['task1','task2','task3'];

router.use((req: Request, res: Response, next: NextFunction) => {

  console.log("Acessou a rota: " + req.url);

  next();
});

// listar tarefas

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

  task.push(name);

  res.json({ ok: true });
});

// atualizar tarefa
router.put("/task/:id", (req: Request, res: Response) => {

  const {id} = req.params;
  const { name } = req.body;

  task[Number(id)] = name;

  res.json(task)
}); 

// deletar tarefa
router.delete("/task/:id", (req: Request, res: Response) => {

  const {id} = req.params;
  
  task.splice(Number(id),1);

  res.json(task)
});
export default router;