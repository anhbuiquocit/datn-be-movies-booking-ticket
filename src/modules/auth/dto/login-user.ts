import { Field, InputType, ObjectType } from '@nestjs/graphql';

// @ObjectType()
@InputType()
export class LoginUserInput {
  @Field()
  username: string;
  @Field()
  password: string;
}
