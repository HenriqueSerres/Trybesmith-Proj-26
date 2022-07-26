import { Router } from 'express';
import OrderController from '../controllers/orderController';
import verifyProductsIds from '../middlewares/verifyProductsIds';
import tokenIsValid from '../middlewares/verifyToken';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', tokenIsValid, verifyProductsIds, orderController.createOrder);

export default router;