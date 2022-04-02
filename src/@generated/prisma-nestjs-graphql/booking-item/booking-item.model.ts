import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Seat } from '../seat/seat.model';
import { Int } from '@nestjs/graphql';
import { Order } from '../order/order.model';
import { Booking } from '../booking/booking.model';
import { BookingItemCount } from './booking-item-count.output';

@ObjectType()
export class BookingItem {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Seat, {nullable:false})
    seat?: Seat;

    @Field(() => String, {nullable:false})
    SeatId!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => [Order], {nullable:true})
    Order?: Array<Order>;

    @Field(() => [Booking], {nullable:true})
    Booking?: Array<Booking>;

    @Field(() => BookingItemCount, {nullable:false})
    _count?: BookingItemCount;
}
