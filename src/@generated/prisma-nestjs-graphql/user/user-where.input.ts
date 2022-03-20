import { Field, Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => DateTimeFilter, { nullable: true })
  createAt?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  updateAt?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  deleteAt?: DateTimeNullableFilter;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field(() => String, { nullable: true })
  address?: string;
}
