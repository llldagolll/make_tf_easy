import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) { }

  async validateUser({ email, password }: CreateUserDto) {
    const user = await this.userService.user({ email });
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials')
    }
    return isValid;
  }

  async login(user: CreateUserDto) {
    if (await this.validateUser(user)) {
      const payload = { name: user.name }
      return {
        'access_token': this.jwtService.sign(payload)
      }
    }
  }
}
