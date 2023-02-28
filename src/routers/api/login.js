import { Router } from 'express';
import loginController from '../../controllers/login.controller.js';
import userControllers from '../../controllers/user.controllers.js';

const router = Router();

router.post('/login', loginController.login);
router.post('/registro', userControllers.createUser);

export default router;
