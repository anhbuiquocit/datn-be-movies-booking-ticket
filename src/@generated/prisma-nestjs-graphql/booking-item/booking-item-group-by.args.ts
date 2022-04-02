import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemWhereInput } from './booking-item-where.input';
import { BookingItemOrderByWithAggregationInput } from './booking-item-order-by-with-aggregation.input';
import { BookingItemScalarFieldEnum } from './booking-item-scalar-field.enum';
import { BookingItemScalarWhereWithAggregatesInput } from './booking-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BookingItemCountAggregateInput } from './booking-item-count-aggregate.input';
import { BookingItemAvgAggregateInput } from './booking-item-avg-aggregate.input';
import { BookingItemSumAggregateInput } from './booking-item-sum-aggregate.input';
import { BookingItemMinAggregateInput } from './booking-item-min-aggregate.input';
import { BookingItemMaxAggregateInput } from './booking-item-max-aggregate.input';

@ArgsType()
export class BookingItemGroupByArgs {

    @Field(() => BookingItemWhereInput, {nullable:true})
    where?: BookingItemWhereInput;

    @Field(() => [BookingItemOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BookingItemOrderByWithAggregationInput>;

    @Field(() => [BookingItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BookingItemScalarFieldEnum>;

    @Field(() => BookingItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: BookingItemScalarWhereWithAggregatesInput;

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
