const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const taskController = require("./controller/task.controller");
const insumoController = require("./controller/insumo.controller");
const produtoController = require("./controller/produto.controller");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const customCss = fs.readFileSync(process.cwd() + "/swagger.css", "utf8");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./ui/build/")));

// let express to use this
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss })
);

app.use(bodyParser.json());

app.get("/api/tasks", (req, res) => {
  taskController.getTasks().then((data) => res.json(data));
});

app.post("/api/task", (req, res) => {
  console.log(req.body);
  taskController.createTask(req.body.task).then((data) => res.json(data));
});

app.put("/api/task", (req, res) => {
  taskController.updateTask(req.body.task).then((data) => res.json(data));
});

app.delete("/api/task/:id", (req, res) => {
  taskController.deleteTask(req.params.id).then((data) => res.json(data));
});

app.get("/api/insumos", (req, res) => {
  insumoController.getInsumo().then((data) => res.json(data));
});

app.post("/api/insumo", (req, res) => {
  console.log(req.body);
  insumoController.createInsumo(req.body.insumo).then((data) => res.json(data));
});

app.put("/api/insumo", (req, res) => {
  insumoController.updateInsumo(req.body.insumo).then((data) => res.json(data));
});

app.delete("/api/insumo/:id", (req, res) => {
  insumoController.deleteInsumo(req.params.id).then((data) => res.json(data));
});

app.get("/api/produtos", (req, res) => {
  produtoController.getInsumo().then((data) => res.json(data));
});

app.post("/api/produto", (req, res) => {
  console.log(req.body);
  produtoController
    .createProduto(req.body.produto)
    .then((data) => res.json(data));
});

app.put("/api/produto", (req, res) => {
  produtoController
    .updateProduto(req.body.produto)
    .then((data) => res.json(data));
});

app.delete("/api/produto/:id", (req, res) => {
  produtoController.deleteProduto(req.params.id).then((data) => res.json(data));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./ui/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
