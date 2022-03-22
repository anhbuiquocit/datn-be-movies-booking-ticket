import { LoginUserInput } from './dto/login-user';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
  async validateUsers(userName: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(userName);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(loginUserInput: LoginUserInput) {
    const user = await this.usersService.findOne(loginUserInput.username);
    const { password, ...result } = user;
    return {
      access_token: 'jwt',
      user: result,
    };
  }
}
