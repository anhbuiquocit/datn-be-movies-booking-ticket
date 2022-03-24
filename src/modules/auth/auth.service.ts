import { compare } from './../../util/bcrypt';
import { PrismaClient } from '@prisma/client';
import { User } from './../../@generated/prisma-nestjs-graphql/user/user.model';
import { LoginUserInput } from './dto/login-user';
import { UsersService } from './../users/users.service';
import {
  Injectable,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
const prisma = new PrismaClient();
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUsers(userName: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(userName);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user) {
    console.log('user: ', user);
    if (!user) {
      throw new HttpException('INVALID_INPUT_PARAMS', 404);
    }
    const userFind = await prisma.user.findFirst({
      where: {
        username: user.username,
      },
    });
    if (!userFind)
      throw new HttpException('USERNAME_OR_PASSWORD_IS_NOT_CORRECT', 404);
    console.log('userFind:', userFind);
    if (compare(user.password, userFind.password)) {
      return {
        access_token: this.jwtService.sign({
          username: user.username,
          sub: user.id,
        }),
        user: userFind,
      };
    }
    return {
      access_token: '',
      userFind: null,
    };
  }
}
