import { Pool } from 'mysql2/promise';
import { IntUser } from '../interfaces/usersInterface';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async userLogin(body: IntUser): Promise<IntUser[]> {
    const { username, password } = body;
    const query = `
    SELECT id, username, password FROM Trybesmith.Users
    WHERE username = ? AND password = ?;`;
    const [user] = await this.connection.execute(query, [username, password]);
    
    return user as IntUser[];
  }
}