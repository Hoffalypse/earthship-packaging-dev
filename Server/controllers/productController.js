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

//create new product private/admin

const createProduct = asyncHandler (async (req, res) => {

const product = new Product({
  name: 'Sample Name',
  price: 0,
  user: req.user._id,
  image: '/images/sample.jpg',
  brand: "Sample Brand",
  category: "Sample Category",
  countInStock: 0,
  description: "Sample Description"
})

const createdProduct = await product.save()
res.status(201).json(createdProduct)

})

//Update a product --private/admin

const updateProduct = asyncHandler (async (req, res) => {

  const {name, price, description, image, brand, category, countInStock} = req.body

  const product = await Product.findById(req.params.id)

  if(product){
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  }else {
    res.status(404)
    throw new Error('Product Not Found')
  }
  
 
  
  })

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct
}