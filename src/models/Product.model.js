export default class Producto {
      #id;
      #codigo;
      #nombre;
      #precio;
      #stock;
      #imagen;
      #descripcion;
      #categoria;
      #timestamp;
      constructor(ProductoDto) {
            this.id = ProductoDto.id;
            this.codigo = ProductoDto.codigo;
            this.nombre = ProductoDto.nombre;
            this.precio = ProductoDto.precio;
            this.stock = ProductoDto.stock;
            this.imagen = ProductoDto.imagen;
            this.descripcion = ProductoDto.descripcion;
            this.categoria = ProductoDto.categoria;
            this.timestamp = ProductoDto.timestamp;
      }
      set id(value) {
            this.#id = value;
      }
      get id() {
            return this.#id;
      }
      set codigo(value) {
            this.#codigo = value;
      }
      get codigo() {
            return this.#codigo;
      }
      set nombre(value) {
            this.#nombre = value;
      }
      get nombre() {
            return this.#nombre;
      }

      set precio(value) {
            this.#precio = value;
      }
      get precio() {
            return this.#precio;
      }
      set stock(value) {
            this.#stock = value;
      }
      get stock() {
            return this.#stock;
      }

      set imagen(value) {
            this.#imagen = value;
      }
      get imagen() {
            return this.#imagen;
      }
      set descripcion(value) {
            this.#descripcion = value;
      }
      get descripcion() {
            return this.#descripcion;
      }
      set categoria(value) {
            this.#categoria = value;
      }
      get categoria() {
            return this.#categoria;
      }
      set timestamp(value) {
            this.#timestamp = value;
      }
      get timestamp() {
            return this.#timestamp;
      }
}
