import MessageRepository from './../models/repository/Message.repository.js';
import Messages from './../models/Message.model.js';
import MessageDto from './../models/dto/message.dto.js';

const repository = new MessageRepository();
class MessageService {
      constructor() {}

      async getAllMessages(query) {
            try {
                  const messages = await repository.getAll(query);
                  return messages.map((message) => new MessageDto(message));
            } catch (error) {
                  throw new Error(error.message);
            }
      }

      async findByEmail(email) {
            try {
                  const messages = await repository.findByEmail(email);
                  return messages.map((message) => new MessageDto(message));
            } catch (error) {
                  throw new Error(error.message);
            }
      }
      async createMessage(data) {
            try {
                  const message = await repository.create(new Messages(data));
                  return new MessageDto(message);
            } catch (error) {
                  throw new Error(error.message);
            }
      }
}
export default new MessageService();
