import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { RoomRelationFilter } from '../room/room-relation-filter.input';
import { BookingItemListRelationFilter } from '../booking-item/booking-item-list-relation-filter.input';

@InputType()
export class SeatWhereInput {

    @Field(() => [SeatWhereInput], {nullable:true})
    AND?: Array<SeatWhereInput>;

    @Field(() => [SeatWhereInput], {nullable:true})
    OR?: Array<SeatWhereInput>;

    @Field(() => [SeatWhereInput], {nullable:true})
    NOT?: Array<SeatWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    position?: StringFilter;

    @Field(() => RoomRelationFilter, {nullable:true})
    room?: RoomRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    RoomId?: StringFilter;

    @Field(() => BookingItemListRelationFilter, {nullable:true})
    BookingItem?: BookingItemListRelationFilter;
}
