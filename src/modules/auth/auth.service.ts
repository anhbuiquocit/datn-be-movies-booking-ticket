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
import { notStrictEqual } from 'assert';
import { MyApolloError } from 'src/util/handleException/MyError';
import { AuthError } from './auth.error';
import { AdminService } from '../admin/admin.service';
const prisma = new PrismaClient();
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private adminService: AdminService,
  ) {}
  async validateUsers(userName: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(userName);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async validateAdmin(userName: string, password: string): Promise<any> {
    const user = await this.adminService.findOne(userName);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user) {
    if (!user) {
      throw new MyApolloError(AuthError.INVALID_INPUT_PARAMS);
    }
    const userFind = await prisma.user.findFirst({
      where: {
        username: user.username,
      },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });
    if (!userFind) throw new MyApolloError(AuthError.USER_NAME_NOT_CORRECT);
    const isPassword = await compare(user.password, userFind.password);
    if (isPassword) {
      return {
        access_token: this.jwtService.sign({
          username: userFind.username,
          sub: userFind.id,
        }),
        user: userFind,
      };
    }
    throw new MyApolloError(AuthError.PASSWORD_IS_NOT_CORRECT);
  }
  async adminLogin(user) {
    if (!user) {
      throw new MyApolloError(AuthError.INVALID_INPUT_PARAMS);
    }
    const adminFind = await prisma.admin.findFirst({
      where: {
        username: user.username,
      },
      select: {
        id: true,
        username: true,
        password: true,
        firstname: true,
        lastname: true,
        birthday: true,
        email: true,
      },
    });
    if (!adminFind) throw new MyApolloError(AuthError.USER_NAME_NOT_CORRECT);
    const isPassword = await compare(user.password, adminFind.password);
    if (isPassword) {
      return {
        access_token: this.jwtService.sign({
          username: adminFind.username,
          sub: adminFind.id,
        }),
        admin: adminFind,
      };
    }
    throw new MyApolloError(AuthError.PASSWORD_IS_NOT_CORRECT);
  }
  async verificationAccount(token: string) {
    const data = this.jwtService.decode(token);
    if (data) {
      const userFind = await prisma.user.findUnique({
        where: {
          id: data?.sub,
        },
      });
      if (!userFind) {
        return false;
      }
      await prisma.user.update({
        where: {
          id: userFind.id,
        },
        data: {
          active: true,
        },
      });
      return true;
    }
  }
}
