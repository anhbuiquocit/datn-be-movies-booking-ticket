import { UpdateOneUserArgs } from './../../@generated/prisma-nestjs-graphql/user/update-one-user.args';
import { Roles } from './../../util/role.decorators';
import { GqlAuthGuard } from './../auth/gql-auth-guard';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { UserWhereInput } from './../../@generated/prisma-nestjs-graphql/user/user-where.input';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { UserCreateInput } from './../../@generated/prisma-nestjs-graphql/user/user-create.input';
import { HttpStatus, HttpException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Role } from 'src/enum';
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args';
import { DeleteOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/delete-one-user.args';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @UseGuards(GqlAuthGuard)
  // @Roles(Role.Admin)
  @Query((type) => [User])
  async UsersConnection(
    @Args()
    args: FindManyUserArgs,
  ): Promise<User[]> {
    return this.userService.connection(args);
  }
  @UseGuards(GqlAuthGuard)
  // @Roles(Role.Admin)
  @Mutation((type) => Boolean)
  async signup(@Args('user') user: UserCreateInput): Promise<any> {
    const userFind = await this.userService.findOne(user.username);
    // console.log('userFind', userWhereInput);
    console.log('userFind: ', userFind);
    if (userFind) {
      throw new HttpException('User existed', HttpStatus.NOT_FOUND);
    }
    await this.userService.signup(user);
    return true;
  }

  @UseGuards(GqlAuthGuard)
  // @Roles(Role.Admin)
  @Mutation((type) => User)
  async createUser(@Args('user') user: UserCreateInput): Promise<User> {
    return this.userService.createUser(user);
  }

  @UseGuards(GqlAuthGuard)
  // @Roles(Role.Admin)
  @Mutation((type) => Boolean)
  async updateUser(@Args() args: UpdateOneUserArgs): Promise<boolean> {
    return this.userService.updateUser(args);
  }

  @UseGuards(GqlAuthGuard)
  // @Roles(Role.Admin)
  @Mutation((type) => Boolean)
  async deleteUser(@Args() args: DeleteOneUserArgs): Promise<boolean> {
    return this.userService.deleteUser(args);
  }
}
