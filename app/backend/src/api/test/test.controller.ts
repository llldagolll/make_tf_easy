import { Controller, Get, Post, Request } from '@nestjs/common';

@Controller('api')
export class TestController {

  @Get('test')
  getHello(@Request() req: any) {
    console.log('success get request')
    return 'hello'
  }

  @Post('test')
  postHello() {
    return 'success post request'
  }
}
