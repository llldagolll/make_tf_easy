import { Controller, Get, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get('findAll')
  async findAll() {
    this.usersService.findAllUsers()
  }

  @Get('findOneByUsername')
  async findOneByUsername(@Request() req) {
    this.usersService.findOneByUsername(req.body.username).catch((e) => {
      throw e
    }).finally(async () => {
      await prisma.$disconnect()
    })
  }

  @Post('createUser')
  async createUser(@Request() req) {
    this.usersService.createUser(req.body.username, req.body.password).catch((e) => {
      throw e
    })
      .finally(async () => {
        await prisma.$disconnect()
      })
  }

  @Get('test')
  echoRequest(@Request() req) {
    console.log(req);

  }

}
