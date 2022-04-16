import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookingItemCountOrderByAggregateInput } from './booking-item-count-order-by-aggregate.input';
import { BookingItemAvgOrderByAggregateInput } from './booking-item-avg-order-by-aggregate.input';
import { BookingItemMaxOrderByAggregateInput } from './booking-item-max-order-by-aggregate.input';
import { BookingItemMinOrderByAggregateInput } from './booking-item-min-order-by-aggregate.input';
import { BookingItemSumOrderByAggregateInput } from './booking-item-sum-order-by-aggregate.input';

@InputType()
export class BookingItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    SeatId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ShowingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => BookingItemCountOrderByAggregateInput, {nullable:true})
    _count?: BookingItemCountOrderByAggregateInput;

    @Field(() => BookingItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: BookingItemAvgOrderByAggregateInput;

    @Field(() => BookingItemMaxOrderByAggregateInput, {nullable:true})
    _max?: BookingItemMaxOrderByAggregateInput;

    @Field(() => BookingItemMinOrderByAggregateInput, {nullable:true})
    _min?: BookingItemMinOrderByAggregateInput;

    @Field(() => BookingItemSumOrderByAggregateInput, {nullable:true})
    _sum?: BookingItemSumOrderByAggregateInput;
}
