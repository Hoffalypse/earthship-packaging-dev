import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler (async (req, res) => {

    const products = await Product.find({});

    res.json(products);

})


const getProductById = asyncHandler (async (req, res) => {

    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product Not Found ')
    }

})

//delete product --private/admin

const deleteProduct = asyncHandler (async (req, res) => {

  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove()
    res.json({message: 'This Product Has Been Removed'})
  } else {
    res.status(404)
    throw new Error('Product Not Found ')
  }

})

export {
    getProducts,
    getProductById,
    deleteProduct,
}