import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereInput } from './booking-where.input';
import { BookingOrderByWithRelationInput } from './booking-order-by-with-relation.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookingCountAggregateInput } from './booking-count-aggregate.input';
import { BookingAvgAggregateInput } from './booking-avg-aggregate.input';
import { BookingSumAggregateInput } from './booking-sum-aggregate.input';
import { BookingMinAggregateInput } from './booking-min-aggregate.input';
import { BookingMaxAggregateInput } from './booking-max-aggregate.input';

@ArgsType()
export class BookingAggregateArgs {

    @Field(() => BookingWhereInput, {nullable:true})
    where?: BookingWhereInput;

    @Field(() => [BookingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookingOrderByWithRelationInput>;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    cursor?: BookingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BookingCountAggregateInput, {nullable:true})
    _count?: BookingCountAggregateInput;

    @Field(() => BookingAvgAggregateInput, {nullable:true})
    _avg?: BookingAvgAggregateInput;

    @Field(() => BookingSumAggregateInput, {nullable:true})
    _sum?: BookingSumAggregateInput;

    @Field(() => BookingMinAggregateInput, {nullable:true})
    _min?: BookingMinAggregateInput;

    @Field(() => BookingMaxAggregateInput, {nullable:true})
    _max?: BookingMaxAggregateInput;
}
