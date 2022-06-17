import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IntUser } from '../interfaces/usersInterface';

dotenv.config();

const minhaSenha = process.env.JWT_SECRET || 'suaSenhaSecreta';

const jwtConfig: SignOptions = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateJWT = (payload: IntUser) => {
  const token = jwt.sign({ data: payload }, minhaSenha, jwtConfig);

  return token;
};

export default generateJWT;