import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class BookingItemScalarWhereWithAggregatesInput {

    @Field(() => [BookingItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookingItemScalarWhereWithAggregatesInput>;

    @Field(() => [BookingItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookingItemScalarWhereWithAggregatesInput>;

    @Field(() => [BookingItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookingItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    SeatId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    ShowingId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bookingId?: StringWithAggregatesFilter;
}
