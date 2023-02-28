import { Router } from 'express';
import userControllers from '../../controllers/user.controllers.js';
import auth from '../../middlewares/auth.js';

const router = Router();
router.use(auth);
router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserById);
router.post('/', userControllers.createUser);
router.put('/', userControllers.updateUser);
router.delete('/:id', userControllers.deleteUser);
export default router;
