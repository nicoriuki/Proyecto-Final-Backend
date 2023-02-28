import { Router } from 'express';
import messageController from '../../controllers/message.controller.js';

import auth from '../../middlewares/auth.js';

const router = Router();
router.use(auth);
router.get('/', messageController.getAllMessages);
router.get('/:email/', messageController.findByEmail);
router.post('/', messageController.createMessage);
export default router;
