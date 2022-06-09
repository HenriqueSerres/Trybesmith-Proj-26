import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  async createProduct(newProduct: IntProduducts): Promise<IntProduducts> {
    const { name, amount } = newProduct;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, name, amount };
  }
}