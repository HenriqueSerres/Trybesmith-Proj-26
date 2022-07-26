import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IntOrder } from '../interfaces/ordersInterface';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IntOrder[]> {
    const query = `
    SELECT Ord.id, Ord.userId, Pro.id AS teste FROM Trybesmith.Orders AS Ord
    JOIN Trybesmith.Products AS Pro
    ON Pro.orderId = Ord.id;`;
    const [allOrders] = await this.connection.execute(query);
    console.log(allOrders);
    
    return allOrders as IntOrder[];
  }

  async createOrder(userId: number) {
    const query = `
    INSERT INTO Trybesmith.Orders (userId) VALUES (?);`;
    const [newOrder] = await this.connection.execute<ResultSetHeader>(query, [userId]);
    const { insertId } = newOrder;
    return insertId;
  }
}