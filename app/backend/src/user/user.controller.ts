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

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) })
  }


  @Post('/signup')
  async signupUser(
    @Body() userData: CreateUserDto,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Delete(':id')
  async delenteUser(
    @Param('id') id: string
  ): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: {
      name?: string,
      email?: string,
    }
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: {
        name: userData?.name,
        email: userData.email
      }
    })
  }
}
