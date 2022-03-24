import { HttpException, HttpStatus, SetMetadata } from '@nestjs/common';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

export const validateUser = (user: User) => {
  const { firstname, lastname, age, address, username, password, email } = user;
  if (!firstname)
    throw new HttpException('Enter your name', HttpStatus.NOT_FOUND);
  if (!lastname)
    throw new HttpException('Enter your name', HttpStatus.NOT_FOUND);
  if (!age) throw new HttpException('Provides ages', HttpStatus.NOT_FOUND);
  if (!address)
    throw new HttpException('Enter your address', HttpStatus.NOT_FOUND);
  if (!username)
    throw new HttpException('Enter your username', HttpStatus.NOT_FOUND);
  if (!password)
    throw new HttpException('Enter your password', HttpStatus.NOT_FOUND);
  if (!email) throw new HttpException('Enter your email', HttpStatus.NOT_FOUND);
};
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
