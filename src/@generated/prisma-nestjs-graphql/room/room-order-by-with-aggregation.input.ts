import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoomCountOrderByAggregateInput } from './room-count-order-by-aggregate.input';
import { RoomMaxOrderByAggregateInput } from './room-max-order-by-aggregate.input';
import { RoomMinOrderByAggregateInput } from './room-min-order-by-aggregate.input';

@InputType()
export class RoomOrderByWithAggregationInput {

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
    CinemaId?: keyof typeof SortOrder;

    @Field(() => RoomCountOrderByAggregateInput, {nullable:true})
    _count?: RoomCountOrderByAggregateInput;

    @Field(() => RoomMaxOrderByAggregateInput, {nullable:true})
    _max?: RoomMaxOrderByAggregateInput;

    @Field(() => RoomMinOrderByAggregateInput, {nullable:true})
    _min?: RoomMinOrderByAggregateInput;
}
