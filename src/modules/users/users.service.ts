import { UsersError } from './users.error';
import { MyApolloError } from 'src/util/handleException/MyError';
import { JwtService } from '@nestjs/jwt';
import { confirmEmailLink } from './../../util/confirmEmailLink';
import { sendEmail } from './../../util/sendEmail';
import { hash } from './../../util/bcrypt';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { Body, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}

  async connection(args): Promise<User[]> {
    const { where, orderBy, cursor, take, skip, distinct } = args;
    const users = prisma.user.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
      distinct,
    });
    return users;
  }
  async createUser(data): Promise<User> {
    try {
      const {
        firstname,
        lastname,
        birthday,
        address,
        email,
        password,
        username,
        active,
        point,
        phone,
        role,
      } = data;
      const userExist = await prisma.user.count({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
          ],
        },
      });
      console.log('userExists: ', userExist);
      if (userExist !== 0) {
        throw new MyApolloError(UsersError.USERNAME_EMAIL_IS_EXIST);
      }
      const userCreate = await prisma.user.create({
        data: {
          firstname,
          lastname,
          birthday,
          address,
          email,
          password: hash(password),
          username,
          active,
          point,
          phone,
          role,
        },
      });
      return userCreate;
    } catch (err) {
      throw new Error(err);
    }
  }
  async signup(data): Promise<any> {
    try {
      if (data) {
        this.validateUser(data);
        const userExist = await prisma.user.count({
          where: {
            username: data.username,
            deleteAt: null,
          },
        });
        console.log('userExist: ', userExist);
        if (userExist) {
          throw new MyApolloError(UsersError.USERNAME_IS_EXISTED);
        }
        console.log('dataa: ', data);
        const user = await prisma.user.create({
          data: {
            firstname: data.firstname,
            lastname: data.lastname,
            birthday: data.birthday,
            address: data.address,
            email: data.email,
            username: data.username,
            password: hash(data.password),
          },
          select: {
            id: true,
            username: true,
          },
        });
        if (user) {
          console.log('user after create: ', user);
          const payload = { username: user.username, sub: user.id };
          const token = this.jwtService.sign(payload);

          // Function send mail
          // sendEmail(data.email, confirmEmailLink(token));

          return true;
        }
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  async updateUser(args): Promise<boolean> {
    const { data, where } = args;
    try {
      const user = await prisma.user.update({
        where,
        data,
      });
      console.log('user after update: ', user);
      return true;
    } catch (err) {
      throw new MyApolloError(UsersError.UPDATE_FAILED);
    }
  }
  async deleteUser(args): Promise<boolean> {
    const { where } = args;
    try {
      await prisma.user.delete({ where });
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
  async findOne(username: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    console.log('userFind: ', user);
    return user;
  }
  validateUser(user: User) {
    const { firstname, lastname, birthday, username, password, email } = user;
    if (!firstname) throw new MyApolloError(UsersError.NAME_IS_NULL);
    if (!lastname) throw new MyApolloError(UsersError.NAME_IS_NULL);
    if (!birthday) throw new MyApolloError(UsersError.BIRTHDAY_IS_NULL);
    if (!username) throw new MyApolloError(UsersError.USERNAME_IS_NULL);
    if (!password) throw new MyApolloError(UsersError.PASSWORD_IS_NULL);
    if (!email) throw new MyApolloError(UsersError.EMAIL_IS_NULL);
  }
}
