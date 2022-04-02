import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ShowingListRelationFilter } from '../showing/showing-list-relation-filter.input';

@InputType()
export class FilmWhereInput {
  @Field(() => [FilmWhereInput], { nullable: true })
  AND?: Array<FilmWhereInput>;

  @Field(() => [FilmWhereInput], { nullable: true })
  OR?: Array<FilmWhereInput>;

  @Field(() => [FilmWhereInput], { nullable: true })
  NOT?: Array<FilmWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  updatedAt?: DateTimeNullableFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: DateTimeNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  trailler?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  director?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  actor?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  time?: StringFilter;

  @Field(() => ShowingListRelationFilter, { nullable: true })
  Showing?: ShowingListRelationFilter;
}
