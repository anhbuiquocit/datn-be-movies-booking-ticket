import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookingItemCountAggregate } from './booking-item-count-aggregate.output';
import { BookingItemMinAggregate } from './booking-item-min-aggregate.output';
import { BookingItemMaxAggregate } from './booking-item-max-aggregate.output';

@ObjectType()
export class BookingItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    SeatId!: string;

    @Field(() => String, {nullable:false})
    ShowingId!: string;

    @Field(() => String, {nullable:false})
    bookingId!: string;

    @Field(() => BookingItemCountAggregate, {nullable:true})
    _count?: BookingItemCountAggregate;

    @Field(() => BookingItemMinAggregate, {nullable:true})
    _min?: BookingItemMinAggregate;

    @Field(() => BookingItemMaxAggregate, {nullable:true})
    _max?: BookingItemMaxAggregate;
}
