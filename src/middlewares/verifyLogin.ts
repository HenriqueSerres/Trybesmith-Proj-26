import Joi from 'joi';
import { RequestHandler } from 'express';

const USER = Joi.object({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
});

const verifyLogin: RequestHandler = (req, res, next) => {
  const { error } = USER.validate(req.body);
  if (error?.message.includes('must be')) {
    next({ status: 422, message: error.message });
  }
  if (error?.message.includes('required')) {
    next({ status: 400, message: error.message });
  }
  next();
};

export default verifyLogin;