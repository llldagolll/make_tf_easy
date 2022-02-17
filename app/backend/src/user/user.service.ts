import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  User,
  Prisma
} from '@prisma/client'
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }
  async findOne(userWhereUniqueInput: { username: string }): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  async createUser(data: CreateUserDto): Promise<any> {
    // here is code for hashing your password ex. hash(data.password)
    return this.prisma.user.create({
      data: {
        // password: await bcrypt.hash(data.password, 12),
        password: data.password,
        username: data.username,
      }
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
