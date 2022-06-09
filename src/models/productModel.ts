import { Pool } from 'mysql2/promise';
import { IntProduducts } from '../interfaces/productsInterface';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IntProduducts[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const [allProducts] = await this.connection.execute(query);
    return allProducts as IntProduducts[];
  }
}