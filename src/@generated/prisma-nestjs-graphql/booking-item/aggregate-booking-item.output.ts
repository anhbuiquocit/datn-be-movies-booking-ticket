import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BookingItemCountAggregate } from './booking-item-count-aggregate.output';
import { BookingItemAvgAggregate } from './booking-item-avg-aggregate.output';
import { BookingItemSumAggregate } from './booking-item-sum-aggregate.output';
import { BookingItemMinAggregate } from './booking-item-min-aggregate.output';
import { BookingItemMaxAggregate } from './booking-item-max-aggregate.output';

@ObjectType()
export class AggregateBookingItem {

    @Field(() => BookingItemCountAggregate, {nullable:true})
    _count?: BookingItemCountAggregate;

    @Field(() => BookingItemAvgAggregate, {nullable:true})
    _avg?: BookingItemAvgAggregate;

    @Field(() => BookingItemSumAggregate, {nullable:true})
    _sum?: BookingItemSumAggregate;

    @Field(() => BookingItemMinAggregate, {nullable:true})
    _min?: BookingItemMinAggregate;

    @Field(() => BookingItemMaxAggregate, {nullable:true})
    _max?: BookingItemMaxAggregate;
}
