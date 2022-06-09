import { Router } from 'express';
import ProductController from '../controllers/productController';
import verifyProduct from '../middlewares/verifyProducts';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', verifyProduct, productController.createProduct);

export default router;