import { Router } from 'express';
import ProductController from '../../controllers/products.controller.js';
import auth from '../../middlewares/auth.js';
import { upload } from '../../middlewares/multer.js';
const router = Router();
router.use(auth);

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductosById);
router.post('/', upload.single('filename'), ProductController.createProduct);
router.put('/:id', upload.single('filename'), ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;
