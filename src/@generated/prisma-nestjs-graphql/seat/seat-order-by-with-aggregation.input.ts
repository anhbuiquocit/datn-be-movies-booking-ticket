import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SeatCountOrderByAggregateInput } from './seat-count-order-by-aggregate.input';
import { SeatMaxOrderByAggregateInput } from './seat-max-order-by-aggregate.input';
import { SeatMinOrderByAggregateInput } from './seat-min-order-by-aggregate.input';

@InputType()
export class SeatOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    RoomId?: keyof typeof SortOrder;

    @Field(() => SeatCountOrderByAggregateInput, {nullable:true})
    _count?: SeatCountOrderByAggregateInput;

    @Field(() => SeatMaxOrderByAggregateInput, {nullable:true})
    _max?: SeatMaxOrderByAggregateInput;

    @Field(() => SeatMinOrderByAggregateInput, {nullable:true})
    _min?: SeatMinOrderByAggregateInput;
}
