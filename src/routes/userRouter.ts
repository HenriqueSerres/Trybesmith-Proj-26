import { Router } from 'express';
import UserController from '../controllers/userController';
import verifyUser from '../middlewares/verifyUsers';

const router = Router();

const userController = new UserController();

router.get('/', verifyUser, userController.getAll);
router.post('/', verifyUser, userController.createUser);

export default router;