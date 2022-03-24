import { Field, InputType, ObjectType, Int } from '@nestjs/graphql';

// @ObjectType()
@InputType()
export class LoginUserInput {
  @Field(() => Int, { nullable: true })
  id: number;
  @Field()
  username: string;
  @Field()
  password: string;
}
