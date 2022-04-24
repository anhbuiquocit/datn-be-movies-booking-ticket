import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingCountOrderByAggregateInput } from './booking-count-order-by-aggregate.input';
import { BookingAvgOrderByAggregateInput } from './booking-avg-order-by-aggregate.input';
import { BookingMaxOrderByAggregateInput } from './booking-max-order-by-aggregate.input';
import { BookingMinOrderByAggregateInput } from './booking-min-order-by-aggregate.input';
import { BookingSumOrderByAggregateInput } from './booking-sum-order-by-aggregate.input';

@InputType()
export class BookingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    UserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    PromotionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPayment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lineSeatMatrix?: keyof typeof SortOrder;

    @Field(() => BookingCountOrderByAggregateInput, {nullable:true})
    _count?: BookingCountOrderByAggregateInput;

    @Field(() => BookingAvgOrderByAggregateInput, {nullable:true})
    _avg?: BookingAvgOrderByAggregateInput;

    @Field(() => BookingMaxOrderByAggregateInput, {nullable:true})
    _max?: BookingMaxOrderByAggregateInput;

    @Field(() => BookingMinOrderByAggregateInput, {nullable:true})
    _min?: BookingMinOrderByAggregateInput;

    @Field(() => BookingSumOrderByAggregateInput, {nullable:true})
    _sum?: BookingSumOrderByAggregateInput;
}
