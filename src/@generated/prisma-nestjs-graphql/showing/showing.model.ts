import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Room } from '../room/room.model';
import { Film } from '../film/film.model';
import { Order } from '../order/order.model';
import { Booking } from '../booking/booking.model';
import { ShowingCount } from './showing-count.output';

@ObjectType()
export class Showing {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Room, {nullable:false})
    room?: Room;

    @Field(() => String, {nullable:false})
    RoomId!: string;

    @Field(() => Film, {nullable:false})
    film?: Film;

    @Field(() => String, {nullable:false})
    FilmId!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => [Order], {nullable:true})
    Order?: Array<Order>;

    @Field(() => [Booking], {nullable:true})
    Booking?: Array<Booking>;

    @Field(() => ShowingCount, {nullable:false})
    _count?: ShowingCount;
}