export default class Orders {
      #id;
      #productos;
      #email;
      #timestamp;
      #estado;
      #order;
      constructor(OrderDto) {
            this.id = OrderDto.id;
            this.productos = OrderDto.productos;
            this.email = OrderDto.email;
            this.estado = OrderDto.estado;
            this.timestamp = OrderDto.timestamp;
            this.order = OrderDto.order;
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
      set email(value) {
            this.#email = value;
      }
      get email() {
            return this.#email;
      }
      set estado(value) {
            this.#estado = value;
      }
      get estado() {
            return this.#estado;
      }
      set order(value) {
            this.#order = value;
      }
      get order() {
            return this.#order;
      }
      set timestamp(value) {
            this.#timestamp = value;
      }
      get timestamp() {
            return this.#timestamp;
      }
}
