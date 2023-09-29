import dotenv from "dotenv";
import express from "express";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productsRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); //conectando ao mongoDB

const app = express();

// testando aplicacao rodando com rotas funcionando:
app.get("/", (req, res) => {
  res.send("Aplicação rodando...");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

// mensagem no terminal para saber se esta rodando normal e qual a porta certa
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
