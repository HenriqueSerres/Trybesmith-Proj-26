import connection from '../models/connection';
import { IntUser } from '../interfaces/usersInterface';
import UserModel from '../models/userModel';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async getAll(): Promise<IntUser[]> {
    const allUsers = await this.model.getAll();
    return allUsers;
  }

  public createUser(newUser: Omit<IntUser, 'id' | 'password'>): Promise<IntUser> {
    return this.model.createUser(newUser);
  }
}