import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClusterCinemaCountOrderByAggregateInput } from './cluster-cinema-count-order-by-aggregate.input';
import { ClusterCinemaMaxOrderByAggregateInput } from './cluster-cinema-max-order-by-aggregate.input';
import { ClusterCinemaMinOrderByAggregateInput } from './cluster-cinema-min-order-by-aggregate.input';

@InputType()
export class ClusterCinemaOrderByWithAggregationInput {

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
    phone?: keyof typeof SortOrder;

    @Field(() => ClusterCinemaCountOrderByAggregateInput, {nullable:true})
    _count?: ClusterCinemaCountOrderByAggregateInput;

    @Field(() => ClusterCinemaMaxOrderByAggregateInput, {nullable:true})
    _max?: ClusterCinemaMaxOrderByAggregateInput;

    @Field(() => ClusterCinemaMinOrderByAggregateInput, {nullable:true})
    _min?: ClusterCinemaMinOrderByAggregateInput;
}
