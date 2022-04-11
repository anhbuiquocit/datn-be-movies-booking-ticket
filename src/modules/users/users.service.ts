import { JwtService } from '@nestjs/jwt';
import { confirmEmailLink } from './../../util/confirmEmailLink';
import { sendEmail } from './../../util/sendEmail';
import { hash } from './../../util/bcrypt';
import { validateUser } from './../../lib/commonFunction';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';
import { Body, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  constructor(private jwtService: JwtService) {}
  async findAll(userData): Promise<User[]> {
    console.log('userData: ', userData);
    const {
      id,
      firstname,
      lastname,
      birthday,
      address,
      email,
      active,
      point,
      phone,
      role,
      Order,
      Booking,
      deleteAt,
      AND,
      OR,
      NOT,
    } = userData;
    const users = await prisma.user.findMany({
      where: {
        deleteAt,
        id,
        firstname,
        lastname,
        birthday,
        address,
        email,
        active,
        point,
        phone,
        role,
        Order,
        Booking,
        AND,
        OR,
        NOT,
      },
    });
    return users;
  }

  async signup(data): Promise<any> {
    try {
      if (data) {
        validateUser(data);
        const userExist = await prisma.user.count({
          where: {
            username: data.username,
            deleteAt: null,
          },
        });
        console.log('userExist: ', userExist);
        if (userExist) {
          throw new Error('User name existed');
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
          console.log('Token: ', token);
          // Function send mail
          // sendEmail(data.email, confirmEmailLink(token));
          return true;
        }
      }
    } catch (err) {
      console.log('Error: ', err);
      return false;
    }
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
