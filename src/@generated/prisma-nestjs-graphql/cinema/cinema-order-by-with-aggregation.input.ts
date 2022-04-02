import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CinemaCountOrderByAggregateInput } from './cinema-count-order-by-aggregate.input';
import { CinemaMaxOrderByAggregateInput } from './cinema-max-order-by-aggregate.input';
import { CinemaMinOrderByAggregateInput } from './cinema-min-order-by-aggregate.input';

@InputType()
export class CinemaOrderByWithAggregationInput {

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
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ClusterCinemaId?: keyof typeof SortOrder;

    @Field(() => CinemaCountOrderByAggregateInput, {nullable:true})
    _count?: CinemaCountOrderByAggregateInput;

    @Field(() => CinemaMaxOrderByAggregateInput, {nullable:true})
    _max?: CinemaMaxOrderByAggregateInput;

    @Field(() => CinemaMinOrderByAggregateInput, {nullable:true})
    _min?: CinemaMinOrderByAggregateInput;
}
