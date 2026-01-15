import { Router, Request, Response, NextFunction } from "express";

const router = Router();

const task=['task1','task2','task3'];

router.use((req: Request, res: Response, next: NextFunction) => {

  console.log("Acessou a rota: " + req.url);

  return next();
});

// middleware para checar se o nome da tarefa foi enviado
function checkTask(req: Request, res: Response, next: NextFunction) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Task name is required" });
  }
  return next();
}

function checkIdTask(req: Request, res: Response, next: NextFunction) {

  const foundTask = task[Number(req.params.id)];

  if (!foundTask) {
    return res.status(400).json({ error: "Task does not exist" });
  }
  return next();
}

// listar tarefas

router.get("/task", (req: Request, res: Response) => {

  res.json(task);

});

router.get("/task/:id", (req: Request, res: Response) => {

  const id = req.params.id;

  res.json({task: task[Number(id)]});
});

// cadastrar

router.post("/task", checkTask, (req: Request, res: Response) => {

  const { name } = req.body;

  task.push(name);

  res.json({ ok: true });
});

// atualizar tarefa
router.put("/task/:id", checkTask, checkIdTask, (req: Request, res: Response) => {

  const {id} = req.params;
  const { name } = req.body;

  task[Number(id)] = name;

  res.json(task)
}); 

// deletar tarefa
router.delete("/task/:id",  checkIdTask, (req: Request, res: Response) => {

  const {id} = req.params;
  
  task.splice(Number(id),1);

  res.json(task)
});
export default router;