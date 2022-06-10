import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IntUser } from '../interfaces/usersInterface';

dotenv.config();

const jwtConfig: object = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateJWT = (payload: IntUser) => {
  const token = jwt.sign({ data: payload }, JSON.stringify(process.env.JWT_SECRET), jwtConfig);

  return token;
};

export default generateJWT;