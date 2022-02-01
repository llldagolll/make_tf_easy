export declare type User = any;
export declare class UsersService {
    findAllUsers(): Promise<import(".prisma/client").users[]>;
    findOneByUsername(username: string): Promise<import(".prisma/client").users>;
    createUser(username: string, password: string): Promise<void>;
}
