import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ShowingScalarWhereWithAggregatesInput {

    @Field(() => [ShowingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ShowingScalarWhereWithAggregatesInput>;

    @Field(() => [ShowingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ShowingScalarWhereWithAggregatesInput>;

    @Field(() => [ShowingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ShowingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    RoomId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    FilmId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endTime?: DateTimeNullableWithAggregatesFilter;
}
