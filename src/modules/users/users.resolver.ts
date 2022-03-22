import { UserWhereInput } from './../../@generated/prisma-nestjs-graphql/user/user-where.input';

import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UserCreateInput } from './../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { HttpStatus, HttpException } from '@nestjs/common';
import { HttpErrorFilter } from './../../util/handleException/http-exception.filter';

import { UsersService } from './users.service';

import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query((type) => [User])
  async Users(
    @Args('userData', { nullable: true })
    userData: UserWhereInput,
  ): Promise<User[]> {
    return this.userService.findAll(userData);
  }

  @Mutation((type) => Boolean)
  async signin(@Args('user') user: UserCreateInput): Promise<any> {
    const userFind = await this.userService.findOne(user.username);
    // console.log('userFind', userWhereInput);
    console.log('userFind: ', userFind);
    if (userFind) {
      throw new HttpException('User existed', HttpStatus.NOT_FOUND);
    }
    await this.userService.signin(user);
    return true;
  }
}
