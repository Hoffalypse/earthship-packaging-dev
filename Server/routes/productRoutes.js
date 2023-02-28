import express from "express";
const router = express.Router();
import { getProducts, getProductById, deleteProduct } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// This is the api/product route


// Fetch All products Public Route

router.route("/").get(getProducts)
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)

export default router;
