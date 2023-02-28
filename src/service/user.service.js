import User from './../models/User.model.js';
import UserDto from './../models/dto/user.dto.js';
import UserRepository from './../models/repository/user.repository.js';

const repository = new UserRepository();
class UsersService {
      constructor() {}

      async getAllUsers(query) {
            try {
                  const users = await repository.getAll(query);
                  return users.map((user) => new UserDto(user));
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      async createUser(data) {
            try {
                  const user = await repository.create(new User(data));
                  return new UserDto(user);
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      async deleteUser(id) {
            try {
                  await repository.deleteById(id);
                  return id;
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async findByEmail(email) {
            try {
                  const user = await repository.findByEmail(email);
                  if (!user) {
                        return;
                  }
                  return new UserDto(user);
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async getUserById(id) {
            try {
                  const user = await repository.getById(id);
                  return new UserDto(user);
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async updateUser(id, data) {
            try {
                  await repository.upDate(id, data);
                  return;
            } catch (error) {
                  throw new Error(error.message);
            }
      }
}
export default new UsersService();
