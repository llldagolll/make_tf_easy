import { Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class TestController {

  @Get('test')
  getHello() {
    return 'success get'
  }

  @Post('test')
  postHello() {
    return 'success post'
  }
}
