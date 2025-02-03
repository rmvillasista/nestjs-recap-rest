import { Injectable } from '@nestjs/common';
import { Role } from './role.enum';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'rmvillasista',
            password: 'password',
            roles:[Role.Admin]
        },
        {
            userId: 2,
            username: 'paulvillasista',
            password: 'password',
            roles: [Role.User]
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username  === username);
    }
}
