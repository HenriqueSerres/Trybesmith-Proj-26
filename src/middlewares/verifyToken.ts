import { RequestHandler, Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const minhaSenha = process.env.JWT_SECRET || 'suaSenhaSecreta';

const tokenIsValid: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }    

    const decoded = jwt.verify(token, minhaSenha);
    const { data } = decoded as JwtPayload;
    req.body.user = data;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
  next();
};

export default tokenIsValid;