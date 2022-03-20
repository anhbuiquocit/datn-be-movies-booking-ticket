import { UserWhereInput } from './../../@generated/prisma-nestjs-graphql/user/user-where.input';
import { UsersService } from './users.service';
import { User } from './users';
import { UserEntity } from './dto/user.entity';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}
  @Query((type) => [User])
  async Users(
    @Args('userWhereInput', { nullable: true }) userWhereInput: UserWhereInput,
  ): Promise<User[]> {
    return this.userService.findAll(userWhereInput);
  }
}
