import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  orderService = new OrderService();

  getAll = async (req: Request, res: Response) => {
    const allOrders = await this.orderService.getAll();
    
    return res.status(200).json(allOrders);
  };

  createOrder = async (req: Request, res: Response) => {
    const { productsIds, user: { id } } = req.body;
    console.log(req.body);    
    
    await this.orderService.createOrder(productsIds, id);
    
    return res.status(200).json({ userId: id, productsIds });
  };
}