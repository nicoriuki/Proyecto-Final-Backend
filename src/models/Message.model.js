export default class Messages {
      #id;
      #type;
      #email;
      #message;
      #date;

      constructor(MessageDto) {
            this.id = MessageDto.id;
            this.type = MessageDto.type;
            this.email = MessageDto.email;
            this.message = MessageDto.message;
            this.date = MessageDto.date;
      }
      set id(value) {
            this.#id = value;
      }
      get id() {
            return this.#id;
      }
      set type(value) {
            this.#type = value;
      }
      get type() {
            return this.#type;
      }
      set email(value) {
            this.#email = value;
      }
      get email() {
            return this.#email;
      }
      set message(value) {
            this.#message = value;
      }
      get message() {
            return this.#message;
      }

      set date(value) {
            this.#date = value;
      }
      get date() {
            return this.#date;
      }
}
