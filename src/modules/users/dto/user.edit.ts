import { Field, InputType, Int } from '@nestjs/graphql';
@InputType()
export class UserWhereInput {
  @Field({ nullable: true })
  id?: number;
  @Field(() => Date, { nullable: true })
  createAt?: string;
  @Field(() => Date, { nullable: true })
  updateAt?: string;
  @Field(() => Date, { nullable: true })
  deleteAt?: string;
  @Field(() => String, { nullable: true })
  firstname?: string;
  @Field(() => String, { nullable: true })
  lastname?: string;
  @Field(() => Int, { nullable: true })
  age?: number;
  @Field(() => String, { nullable: true })
  address?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @Field(() => String, { nullable: true })
  password?: string;
  @Field(() => String, { nullable: true })
  email?: string;
}
