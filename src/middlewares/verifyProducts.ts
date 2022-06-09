import Joi from 'joi';
import { RequestHandler } from 'express';

const PRODUCT = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const verifyProduct: RequestHandler = (req, res, next) => {
  const { error } = PRODUCT.validate(req.body);
  if (error?.message.includes('must be')) {
    next({ status: 422, message: error.message });
  }
  if (error?.message.includes('required')) {
    next({ status: 400, message: error.message });
  }
  next();
};

export default verifyProduct;