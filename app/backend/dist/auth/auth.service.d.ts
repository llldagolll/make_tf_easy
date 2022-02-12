import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UserService);
    validateUser({ email, password }: CreateUserDto): Promise<true>;
    login(user: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
