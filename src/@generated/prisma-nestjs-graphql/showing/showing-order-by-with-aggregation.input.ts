import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShowingCountOrderByAggregateInput } from './showing-count-order-by-aggregate.input';
import { ShowingMaxOrderByAggregateInput } from './showing-max-order-by-aggregate.input';
import { ShowingMinOrderByAggregateInput } from './showing-min-order-by-aggregate.input';

@InputType()
export class ShowingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    RoomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    FilmId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endDate?: keyof typeof SortOrder;

    @Field(() => ShowingCountOrderByAggregateInput, {nullable:true})
    _count?: ShowingCountOrderByAggregateInput;

    @Field(() => ShowingMaxOrderByAggregateInput, {nullable:true})
    _max?: ShowingMaxOrderByAggregateInput;

    @Field(() => ShowingMinOrderByAggregateInput, {nullable:true})
    _min?: ShowingMinOrderByAggregateInput;
}
