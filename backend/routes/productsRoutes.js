import express from "express";

const router = express.Router();
import {
  getProductsById,
  getProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);
export default router;
