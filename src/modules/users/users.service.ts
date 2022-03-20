import { User } from './users';
import { Body, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  // constructor(private context: configuration) {}
  async findAll(userWhereInput): Promise<User[]> {
    // if (id == null) {
    //   throw new HttpException('This is error', HttpStatus.NOT_FOUND);
    // }
    console.log('userWhereInput: ', userWhereInput);
    const { id, firstname, lastname, age, address, OR, AND, NOT } =
      userWhereInput;
    console.log('iD: ', id);
    console.log('firstname: ', firstname);
    console.log('lastname: ', lastname);
    console.log('age: ', age);
    console.log('address: ', address);
    const users = await prisma.user.findMany({
      where: {
        id,
        firstname,
        lastname,
        age,
        address,
        OR,
        AND,
        NOT,
      },
    });
    return users;
  }
}
