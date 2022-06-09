import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  productService = new ProductService();

  getAll = async (req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();
    
    return res.status(200).json(allProducts);
  };

  createProduct = async (req: Request, res: Response) => {
    const newProduct = req.body;
    const createdProduct = await this.productService.createProduct(newProduct);
    return res.status(201).json(createdProduct);
  };
}