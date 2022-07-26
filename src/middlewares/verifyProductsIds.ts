import Joi from 'joi';
import { RequestHandler } from 'express';

const PRODUCT = Joi.object({
  user: Joi.object(),
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

const verifyProductsIds: RequestHandler = (req, res, next) => {
  const { error } = PRODUCT.validate(req.body);
  if (error?.message.includes('include')) {
    next({ status: 422, message: error.message });
  }
  
  next();
};

export default verifyProductsIds;