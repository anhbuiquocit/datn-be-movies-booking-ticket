import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field((type) => Int)
  age: number;
  @Field()
  address: string;
}
