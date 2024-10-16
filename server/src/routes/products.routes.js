import { Router } from "express";
import ctrl  from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/products", ctrl.getProducts);

export { productsRouter };