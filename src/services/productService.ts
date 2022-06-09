import connection from '../models/connection';
import { IntProduducts } from '../interfaces/productsInterface';
import ProductModel from '../models/productModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll(): Promise<IntProduducts[]> {
    const allProducts = await this.model.getAll();
    return allProducts;
  }

  public createProduct(newProduct: IntProduducts): Promise<IntProduducts> {
    return this.model.createProduct(newProduct);
  }
}