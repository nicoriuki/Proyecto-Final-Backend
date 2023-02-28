export default class Carts {
      #id;
      #password;
      #nombre;
      #email;
      #direccion;
      #telefono;
      #type;
      #timestamps;
      constructor(UserDto) {
            this.id = UserDto.id;
            this.password = UserDto.password;
            this.nombre = UserDto.nombre;
            this.email = UserDto.email;
            this.direccion = UserDto.direccion;
            this.telefono = UserDto.telefono;
            this.type = UserDto.type;
            this.timestamps = UserDto.timestamps;
      }
      set id(value) {
            this.#id = value;
      }
      get id() {
            return this.#id;
      }
      set password(value) {
            this.#password = value;
      }
      get password() {
            return this.#password;
      }
      set nombre(value) {
            this.#nombre = value;
      }
      get nombre() {
            return this.#nombre;
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
      set telefono(value) {
            this.#telefono = value;
      }
      get telefono() {
            return this.#telefono;
      }
      set type(value) {
            this.#type = value;
      }
      get type() {
            return this.#type;
      }
      set timestamps(value) {
            this.#timestamps = value;
      }
      get timestamps() {
            return this.#timestamps;
      }
}
