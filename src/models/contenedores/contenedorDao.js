import { CustomError } from '../dao/errors/customError.js';

class MongoDao {
      async getAll() {
            throw new CustomError(500, 'Method not implemented');
      }

      async getById(id) {
            throw new CustomError(500, 'Method not implemented');
      }

      async create(data) {
            throw new CustomError(500, 'Method not implemented');
      }

      async updateById(id, data) {
            throw new CustomError(500, 'Method not implemented');
      }

      async deleteById(id) {
            throw new CustomError(500, 'Method not implemented');
      }
}

export default MongoDao;
