import { Router } from 'express';
// import * as blogControllers from '../controllers/userController';

const router = Router();

router.get('/', userControllers.getAll);

export default router;