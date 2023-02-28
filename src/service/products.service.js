import ProdutRepository from './../models/repository/Product.repository.js';
import Products from './../models/Product.model.js';
import ProductDto from './../models/dto/Product.dto.js';
const repository = new ProdutRepository();
class ProductoService {
      constructor() {}

      async getAllProducts(query) {
            try {
                  const products = await repository.getAll(query);
                  return products.map((product) => new ProductDto(product));
            } catch (error) {
                  throw new Error(error);
            }
      }

      async createProduct(data) {
            try {
                  const product = await repository.create(new Products(data));
                  return new ProductDto(product);
            } catch (error) {
                  throw new Error(error);
            }
      }

      async deleteProduct(id) {
            try {
                  await repository.deleteProduct(id);
                  return id;
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getProductosById(id) {
            try {
                  const producto = await repository.getById(id);
                  return new ProductDto(producto);
            } catch (error) {
                  throw new Error(error);
            }
      }
      async getByCategoria(categoria) {
            try {
                  const products = await repository.getByParameter(
                        categoria,
                        'categoria'
                  );
                  return products.map((product) => new ProductDto(product));
            } catch (error) {
                  throw new Error(error);
            }
      }
      async updateProduct(id, data) {
            try {
                  await repository.upDate(id, data);
                  return;
            } catch (error) {
                  throw new Error(error);
            }
      }
}
export default new ProductoService();
