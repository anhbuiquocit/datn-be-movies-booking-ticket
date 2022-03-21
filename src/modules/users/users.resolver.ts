import * as userModel from './dto/index';

import { UsersService } from './users.service';
import { User } from './users';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query((type) => [User])
  async Users(
    @Args('userWhereInput', { nullable: true })
    userWhereInput: userModel.UserWhereInput,
  ): Promise<User[]> {
    return this.userService.findAll(userWhereInput);
  }

  @Mutation((type) => Boolean)
  async signin(
    @Args('userWhereInput') userWhereInput: userModel.UserWhereInput,
  ): Promise<any> {
    // const user = this.userService.findOne()
    console.log('ffffff');
    return true;
  }
}
