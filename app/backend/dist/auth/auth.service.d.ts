import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser({ username, password }: CreateUserDto): Promise<any>;
    login(user: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
