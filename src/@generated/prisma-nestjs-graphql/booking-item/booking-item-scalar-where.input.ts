import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class BookingItemScalarWhereInput {

    @Field(() => [BookingItemScalarWhereInput], {nullable:true})
    AND?: Array<BookingItemScalarWhereInput>;

    @Field(() => [BookingItemScalarWhereInput], {nullable:true})
    OR?: Array<BookingItemScalarWhereInput>;

    @Field(() => [BookingItemScalarWhereInput], {nullable:true})
    NOT?: Array<BookingItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    SeatId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    ShowingId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    bookingId?: StringFilter;
}
