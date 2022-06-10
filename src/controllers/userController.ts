import { Request, Response } from 'express';
import UserService from '../services/userService';
import generateJWT from '../utils/generateToken';

export default class UserController {
  userService = new UserService();

  getAll = async (req: Request, res: Response) => {
    const allusers = await this.userService.getAll();
    
    return res.status(200).json(allusers);
  };

  createUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    const createdUser = await this.userService.createUser(newUser);
    const token = generateJWT(createdUser);
    return res.status(201).json({ token });
  };
}