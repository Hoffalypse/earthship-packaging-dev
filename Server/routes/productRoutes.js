import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

//////////////////////// This is the api/product route


// Fetch All products Public Route

router.get(
  "/",
  asyncHandler(async (req, res) => {
    try{
    const products = await Product.find({});

    res.json(products);
    }
    catch(error){
console.error(error + 'this is the error')
    }
  })
)

// Fetch one product public route 
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product Not Found ')
    }
  })
);

export default router;
