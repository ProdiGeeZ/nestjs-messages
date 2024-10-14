import { MessagesRepository } from "./messages.repository";

export class MessageService {
    messagesRepo: MessagesRepository;

    constructor() {
        // * Service is creating its own dependencies
        // * Don't do this on production apps
        this.messagesRepo = new MessagesRepository();
    }

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    async findAll() {
        return this.messagesRepo.findAll();
    }

    async create(content: string) {
        return this.messagesRepo.create(content);
    }
}