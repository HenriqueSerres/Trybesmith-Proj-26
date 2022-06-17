import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import { IntUser } from '../interfaces/usersInterface';
import HandleError from '../utils/handleError';

export default class LoginService {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async userLogin(user: IntUser): Promise<IntUser> {
    const [login] = await this.model.userLogin(user);
    if (!login || login.username !== user.username) {
      throw new HandleError(401, 'Username or password invalid');
    }
    if (login.password !== user.password) {
      throw new HandleError(401, 'Username or password invalid');
    }
    
    return login as IntUser;
  }
}