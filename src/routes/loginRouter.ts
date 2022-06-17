import { Router } from 'express';
import LoginController from '../controllers/loginController';
import verifyLogin from '../middlewares/verifyLogin';

const router = Router();

const loginController = new LoginController();

router.post('/', verifyLogin, loginController.userLogin);

export default router;