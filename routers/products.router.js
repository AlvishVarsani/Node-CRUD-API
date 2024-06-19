import express from "express";
import { getProducts, createProduct, updateProduct, getProductsById, deleteProduct } from '../controllers/product.controller.js';



const router = express.Router();

router.get('/',getProducts)
router.get('/:id',getProductsById) //to get by id
router.post('/',createProduct)  //create
router.put('/:id',updateProduct)  //update
router.delete('/:id',deleteProduct)  //delete


export default router;