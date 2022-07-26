import connection from '../models/connection';
import { IntOrder } from '../interfaces/ordersInterface';
import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';

export default class OrderService {
  model: OrderModel;

  productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  async getAll(): Promise<IntOrder[]> {
    const allOrders = await this.model.getAll();
    const orders = allOrders.map((order) => ({
      ...order,
      productsIds: [order.teste],
    }));
    
    return orders;
  }

  async createOrder(productsIds: number[], userId: number) {
    const newOrder = await this.model.createOrder(userId);
    console.log('AAA', productsIds);
    console.log('BBB', userId);    
    
    const ids = productsIds.map(async (id) => {
      this.productModel.update(id, newOrder);
    });
    await Promise.all(ids);
    
    return { productsIds, userId };
  }
}