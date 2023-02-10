import express from "express";
const router = express.Router();
import { getProducts, getProductById } from '../controllers/product.controller.js'

// This is the api/product route


// Fetch All products Public Route

router.route("/").get(getProducts)

// Fetch one product public route 
router.route("/:id").get(getProductById)

export default router;
