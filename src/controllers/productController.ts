import { Request, Response } from 'express';
import ProductService from '../services/productService';

export default class ProductController {
  productService = new ProductService();

  getAll = async (req: Request, res: Response) => {
    const allProducts = await this.productService.getAll();
    console.log(allProducts);
    
    return res.status(200).json(allProducts);
  };
}