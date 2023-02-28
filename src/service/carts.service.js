import Carts from './../models/Cart.model.js';

import CartDto from './../models/dto/Cart.dto.js';
import CartRepository from './../models/repository/Cart.repository.js';

const repository = new CartRepository();
class CartService {
      constructor() {}

      async getAllCarts(query) {
            try {
            } catch (error) {
                  throw new Error(error);
            }
            const carts = await repository.getAll(query);
            return carts.map((cart) => new CartDto(cart));
      }

      async createCart(data) {
            try {
                  const carts = await repository.create(new Carts(data));
                  return new CartDto(carts);
            } catch (error) {
                  throw new Error(error);
            }
      }

      async deleteCart(id) {
            try {
                  await repository.deleteById(id);
                  return id;
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getCartById(id) {
            try {
                  const carts = await repository.getById(id);
                  return new CartDto(carts);
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getCartByIdUser(idUser) {
            try {
                  const cart = await repository.getByParameter(idUser, 'user');
                  return new CartDto(cart);
            } catch (error) {
                  throw new Error(error);
            }
      }
      async updateCart(id, data) {
            try {
                  await repository.updateById(id, data);
                  return;
            } catch (error) {
                  throw new Error(error);
            }
      }
}
export default new CartService();
