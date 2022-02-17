import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get('users')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users()
  }

  // @Get(':id')
  // async getUserById(@Param('id') id: string): Promise<UserModel> {
  //   return this.userService.findOne({ id: Number(id) })
  // }

  @Get(':username')
  async getUserByUsername(@Param('username') username: string): Promise<UserModel> {
    return this.userService.findOne({ username })
  }


  @Post('/signup')
  async signupUser(
    @Body() userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete(':username')
  async deleteUserByUsername(
    @Param('username') username: string
  ): Promise<UserModel> {
    return this.userService.deleteUser({ username });
  }

  @Delete(':id')
  async deleteUserById(
    @Param('id') id: string
  ): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: {
      username?: string,
      password?: string,
    }
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: {
        username: userData?.username,
        password: userData?.password
      }
    })
  }
}
