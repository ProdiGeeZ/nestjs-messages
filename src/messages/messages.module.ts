import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessagesRepository] // Things that can be used as dependencies in other classes
})
export class MessagesModule {}
