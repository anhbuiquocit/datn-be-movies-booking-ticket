import { Field, InputType, ObjectType, Int } from '@nestjs/graphql';

// @ObjectType()
@InputType()
export class LoginUserInput {
  @Field(() => String, { nullable: true })
  id: string;
  @Field()
  username: string;
  @Field()
  password: string;
}
