import connection from '../models/connection';
import { IntOrder } from '../interfaces/ordersInterface';
import OrderModel from '../models/orderModel';

export default class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<IntOrder[]> {
    const allOrders = await this.model.getAll();
    const orders = allOrders.map((order) => ({
      ...order,
      productsIds: [order.teste],
    }));
    console.log(orders);
    
    return orders;
  }
}