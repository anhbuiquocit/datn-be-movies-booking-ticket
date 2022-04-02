import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemWhereInput } from './booking-item-where.input';
import { BookingItemOrderByWithRelationInput } from './booking-item-order-by-with-relation.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookingItemCountAggregateInput } from './booking-item-count-aggregate.input';
import { BookingItemAvgAggregateInput } from './booking-item-avg-aggregate.input';
import { BookingItemSumAggregateInput } from './booking-item-sum-aggregate.input';
import { BookingItemMinAggregateInput } from './booking-item-min-aggregate.input';
import { BookingItemMaxAggregateInput } from './booking-item-max-aggregate.input';

@ArgsType()
export class BookingItemAggregateArgs {

    @Field(() => BookingItemWhereInput, {nullable:true})
    where?: BookingItemWhereInput;

    @Field(() => [BookingItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookingItemOrderByWithRelationInput>;

    @Field(() => BookingItemWhereUniqueInput, {nullable:true})
    cursor?: BookingItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BookingItemCountAggregateInput, {nullable:true})
    _count?: BookingItemCountAggregateInput;

    @Field(() => BookingItemAvgAggregateInput, {nullable:true})
    _avg?: BookingItemAvgAggregateInput;

    @Field(() => BookingItemSumAggregateInput, {nullable:true})
    _sum?: BookingItemSumAggregateInput;

    @Field(() => BookingItemMinAggregateInput, {nullable:true})
    _min?: BookingItemMinAggregateInput;

    @Field(() => BookingItemMaxAggregateInput, {nullable:true})
    _max?: BookingItemMaxAggregateInput;
}
