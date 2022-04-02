import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ShowingScalarWhereInput {

    @Field(() => [ShowingScalarWhereInput], {nullable:true})
    AND?: Array<ShowingScalarWhereInput>;

    @Field(() => [ShowingScalarWhereInput], {nullable:true})
    OR?: Array<ShowingScalarWhereInput>;

    @Field(() => [ShowingScalarWhereInput], {nullable:true})
    NOT?: Array<ShowingScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    RoomId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    FilmId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;
}
