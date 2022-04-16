import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Seat } from '../seat/seat.model';
import { Showing } from '../showing/showing.model';
import { Int } from '@nestjs/graphql';
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

    @Field(() => Showing, {nullable:false})
    showing?: Showing;

    @Field(() => String, {nullable:false})
    ShowingId!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => [Booking], {nullable:true})
    Booking?: Array<Booking>;

    @Field(() => BookingItemCount, {nullable:false})
    _count?: BookingItemCount;
}
