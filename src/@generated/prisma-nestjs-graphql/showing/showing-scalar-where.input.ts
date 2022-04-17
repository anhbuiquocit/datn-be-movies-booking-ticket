import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

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

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endDate?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startTime?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endTime?: DateTimeNullableFilter;
}
