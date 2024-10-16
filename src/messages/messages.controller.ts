import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessageService) {}

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const msg = await this.messagesService.findOne(id);
        if (!msg[id]) {
            throw new NotFoundException('Message not found');
        }
        return msg;
    }
}
