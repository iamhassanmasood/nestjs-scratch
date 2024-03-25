import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  @Get()
  getAllMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createNewMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.message);
  }

  @Get('/:id')
  async getSingleMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('No message found');
    }
    return message;
  }
}
