import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); //conectando ao mongoDB

const app = express();

// middleware parser:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cookie middleware:
app.use(cookieParser());

// testando aplicacao rodando com rotas funcionando:
app.get("/", (req, res) => {
  res.send("Aplicação rodando...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

// mensagem no terminal para saber se esta rodando normal e qual a porta certa
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
