export default class Carts {
      #id;
      #productos;
      #user;
      #direccion;
      #email;
      #timestamp;
      constructor(CartDto) {
            this.id = CartDto.id;
            this.productos = CartDto.productos;
            this.user = CartDto.user;
            this.email = CartDto.email;
            this.direccion = CartDto.direccion;
            this.timestamp = CartDto.timestamp;
      }
      set id(value) {
            this.#id = value;
      }
      get id() {
            return this.#id;
      }
      set productos(value) {
            this.#productos = value;
      }
      get productos() {
            return this.#productos;
      }
      set user(value) {
            this.#user = value;
      }
      get user() {
            return this.#user;
      }
      set email(value) {
            this.#email = value;
      }
      get email() {
            return this.#email;
      }
      set direccion(value) {
            this.#direccion = value;
      }
      get direccion() {
            return this.#direccion;
      }
      set timestamp(value) {
            this.#timestamp = value;
      }
      get timestamp() {
            return this.#timestamp;
      }
}
