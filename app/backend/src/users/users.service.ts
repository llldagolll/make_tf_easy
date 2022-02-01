import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export type User = any;

const prisma = new PrismaClient()

@Injectable()
export class UsersService {

  async findAllUsers() {
    const users = await prisma.users.findMany()
    console.dir(users, { depth: null })
    return users
  }


  async findOneByUsername(username: string) {
    const user = await prisma.users.findUnique({
      where: {
        name: username,
      },
    })
    return user
  }


  async createUser(username: string, password: string) {
    const user = await prisma.users.create({
      data: {
        name: username,
        password: password,
      },
    })
    console.log(user);

  }


}
