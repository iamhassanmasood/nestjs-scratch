import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  getAllMessages() {
    return 'All Messages';
  }
  @Post()
  createNewMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  @Get(':id')
  getSingleMessage(@Param() id: string) {
    console.log(id);
    return 'One Message';
  }
}
