import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;
  @Field(() => User)
  user: User;
}
