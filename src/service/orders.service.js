import OrderRepository from './../models/repository/Order.repository.js';
import OrderDto from './../models/dto/Order.dto.js';
import Orders from './../models/Order.model.js';

const repository = new OrderRepository();
class OrderService {
      constructor() {}

      async getAllOrders(query) {
            try {
                  const orders = await repository.getAll(query);
                  return orders.map((order) => new OrderDto(order));
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      async getOrderByEmail(email) {
            try {
                  const orders = await repository.getByParameter(
                        email,
                        'email'
                  );
                  return orders.map((order) => new OrderDto(order));
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async createOrders(data) {
            try {
                  const order = await repository.create(new Orders(data));
                  return new OrderDto(order);
            } catch (error) {
                  throw new Error(error.message);
            }
      }
}
export default new OrderService();
