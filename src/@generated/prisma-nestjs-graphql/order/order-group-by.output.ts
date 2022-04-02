import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

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

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: OrderAvgAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: OrderSumAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
