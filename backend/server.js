import dotenv from "dotenv";
import express from "express";
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 5000;

const app = express();

// testando aplicacao rodando com rotas funcionando:
app.get("/", (req, res) => {
  res.send("Aplicação rodando...");
});

// obtendo produtos salvos:
app.get("/api/products", (req, res) => {
  res.json(products);
});

// obtendo produto especifico atraves de id:
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// mensagem no terminal para saber se esta rodando normal e qual a porta certa
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
