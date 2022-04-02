import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CinemaRelationFilter } from '../cinema/cinema-relation-filter.input';
import { SeatListRelationFilter } from '../seat/seat-list-relation-filter.input';
import { ShowingListRelationFilter } from '../showing/showing-list-relation-filter.input';

@InputType()
export class RoomWhereInput {

    @Field(() => [RoomWhereInput], {nullable:true})
    AND?: Array<RoomWhereInput>;

    @Field(() => [RoomWhereInput], {nullable:true})
    OR?: Array<RoomWhereInput>;

    @Field(() => [RoomWhereInput], {nullable:true})
    NOT?: Array<RoomWhereInput>;

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

    @Field(() => CinemaRelationFilter, {nullable:true})
    cinema?: CinemaRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    CinemaId?: StringFilter;

    @Field(() => SeatListRelationFilter, {nullable:true})
    Seat?: SeatListRelationFilter;

    @Field(() => ShowingListRelationFilter, {nullable:true})
    Showing?: ShowingListRelationFilter;
}
