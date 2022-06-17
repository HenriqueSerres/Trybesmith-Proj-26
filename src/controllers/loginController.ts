import { Request, Response, NextFunction } from 'express';
import LoginService from '../services/loginService';
import generateJWT from '../utils/generateToken';

export default class LoginController {
  loginService = new LoginService();

  userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const login = await this.loginService.userLogin(req.body);
      console.log(login);
      const token = generateJWT(login); 
    
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}