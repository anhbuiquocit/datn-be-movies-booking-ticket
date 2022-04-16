import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { SeatRelationFilter } from '../seat/seat-relation-filter.input';
import { ShowingRelationFilter } from '../showing/showing-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';

@InputType()
export class BookingItemWhereInput {

    @Field(() => [BookingItemWhereInput], {nullable:true})
    AND?: Array<BookingItemWhereInput>;

    @Field(() => [BookingItemWhereInput], {nullable:true})
    OR?: Array<BookingItemWhereInput>;

    @Field(() => [BookingItemWhereInput], {nullable:true})
    NOT?: Array<BookingItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => SeatRelationFilter, {nullable:true})
    seat?: SeatRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    SeatId?: StringFilter;

    @Field(() => ShowingRelationFilter, {nullable:true})
    showing?: ShowingRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    ShowingId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => BookingListRelationFilter, {nullable:true})
    Booking?: BookingListRelationFilter;
}
