import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { RoomRelationFilter } from '../room/room-relation-filter.input';
import { FilmRelationFilter } from '../film/film-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookingItemListRelationFilter } from '../booking-item/booking-item-list-relation-filter.input';

@InputType()
export class ShowingWhereInput {

    @Field(() => [ShowingWhereInput], {nullable:true})
    AND?: Array<ShowingWhereInput>;

    @Field(() => [ShowingWhereInput], {nullable:true})
    OR?: Array<ShowingWhereInput>;

    @Field(() => [ShowingWhereInput], {nullable:true})
    NOT?: Array<ShowingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => RoomRelationFilter, {nullable:true})
    room?: RoomRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    RoomId?: StringFilter;

    @Field(() => FilmRelationFilter, {nullable:true})
    film?: FilmRelationFilter;

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

    @Field(() => BookingItemListRelationFilter, {nullable:true})
    BookingItem?: BookingItemListRelationFilter;
}
