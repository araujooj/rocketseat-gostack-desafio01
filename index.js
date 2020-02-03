const express = require("express");

const server = express();

server.use(express.json());

const projects = [
  {
    id: "1",
    title: "Aircnc",
    tasks: ["Fazer ajustes no mobile"]
  },
  {
    id: "2",
    title: "GoBarber",
    tasks: ["Terminar backend", "Começar o front-end no react"]
  }
];

// Middlewares abaixo
function checkProjectExists(req, res, next) {
  const id = req.body.id;
  if (!id) {
    return res.status(400).json({ error: "id is required" });
  }
  next();
}
function checkProjectInArray(req, res, next) {
  const project = projects[req.params.index];
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  req.project = project;
  next();
}

server.use((req, res, next) => {
  console.log(
    `A requisição foi chamada, método: ${req.method} e a url: ${req.url}`
  );
  return next();
});

server.get("/projects", (req, res) => {
  return res.json({ projects });
});

server.get("/projects/:index", checkProjectInArray, (req, res) => {
  const { index } = req.params;
  const projectIndex = projects[index];
  return res.json({ projectIndex });
});

server.post("/projects", checkProjectExists, (req, res) => {
  const { id, title, tasks } = req.body;
  const project = {
    id,
    title,
    tasks
  };
  projects.push(project);
  return res.json(project);
});

server.put(
  "/projects/:index",
  checkProjectInArray,
  checkProjectExists,
  (req, res) => {
    const { index } = req.params;
    const { id, title, tasks } = req.body;
    const project = {
      id,
      title,
      tasks
    };
    projects[index] = project;

    return res.json(projects);
  }
);

server.delete("/projects/:index", checkProjectInArray, (req, res) => {
  const { index } = req.params;

  projects.splice(index, 1);
  return res.send();
});
server.listen(3333);
