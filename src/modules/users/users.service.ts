import { hash } from './../../util/bcrypt';
import { validateUser } from './../../lib/commonFunction';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { Body, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  // constructor(private context: configuration) {}
  async findAll(userData): Promise<User[]> {
    console.log('userData: ', userData);
    const users = await prisma.user.findMany({
      where: {
        deleteAt: userData.deleteAt.equals,
      },
    });
    return users;
  }

  async signin(data): Promise<any> {
    if (data) {
      validateUser(data);
      const user = await prisma.user.create({
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          age: data.age,
          address: data.address,
          email: data.email,
          username: data.username,
          password: hash(data.password),
        },
      });
      return true;
    }
    return false;
  }
  async findOne(username: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });
    console.log('userFind: ', user);
    return user;
  }
}
