import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingCountAggregate } from './booking-count-aggregate.output';
import { BookingAvgAggregate } from './booking-avg-aggregate.output';
import { BookingSumAggregate } from './booking-sum-aggregate.output';
import { BookingMinAggregate } from './booking-min-aggregate.output';
import { BookingMaxAggregate } from './booking-max-aggregate.output';

@ObjectType()
export class BookingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    UserId!: string;

    @Field(() => String, {nullable:false})
    ShowingId!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    BookingItemId!: string;

    @Field(() => String, {nullable:false})
    PromotionId!: string;

    @Field(() => BookingCountAggregate, {nullable:true})
    _count?: BookingCountAggregate;

    @Field(() => BookingAvgAggregate, {nullable:true})
    _avg?: BookingAvgAggregate;

    @Field(() => BookingSumAggregate, {nullable:true})
    _sum?: BookingSumAggregate;

    @Field(() => BookingMinAggregate, {nullable:true})
    _min?: BookingMinAggregate;

    @Field(() => BookingMaxAggregate, {nullable:true})
    _max?: BookingMaxAggregate;
}
