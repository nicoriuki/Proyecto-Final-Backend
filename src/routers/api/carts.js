import { Router } from 'express';
import cartsControllers from '../../controllers/carts.controllers.js';
import auth from '../../middlewares/auth.js';

const router = Router();
router.use(auth);
router.get('/', cartsControllers.getAllCarts);
router.get('/:id/products', cartsControllers.cartProduct);
router.get('/:idUser/', cartsControllers.getCartByIdUser);
router.post('/:id/products', cartsControllers.newProduct);
router.post('/', cartsControllers.createCart);
router.put('/:userId', cartsControllers.updateCart);
router.delete(
      '/:idCart/product/:idProduct',
      cartsControllers.deleteProductCart
);
router.delete('/:id', cartsControllers.deleteCart);

export default router;
