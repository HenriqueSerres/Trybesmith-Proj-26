import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IntUser } from '../interfaces/usersInterface';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IntUser[]> {
    const query = 'SELECT * FROM Trybesmith.Users;';
    const [allUsers] = await this.connection.execute(query);
    return allUsers as IntUser[];
  }

  async createUser(newUser: IntUser): Promise<IntUser> {
    const { username, classe, level, password } = newUser;
    const query = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?, ?, ?, ?);`;
    const result = await this.connection.execute<ResultSetHeader>(query, [
      username, 
      classe, 
      level, 
      password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, username, classe, level, password };
  }
}