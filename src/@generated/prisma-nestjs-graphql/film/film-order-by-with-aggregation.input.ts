import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilmCountOrderByAggregateInput } from './film-count-order-by-aggregate.input';
import { FilmAvgOrderByAggregateInput } from './film-avg-order-by-aggregate.input';
import { FilmMaxOrderByAggregateInput } from './film-max-order-by-aggregate.input';
import { FilmMinOrderByAggregateInput } from './film-min-order-by-aggregate.input';
import { FilmSumOrderByAggregateInput } from './film-sum-order-by-aggregate.input';

@InputType()
export class FilmOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trailler?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    director?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageDescription1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageDescription2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageDescription3?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;

    @Field(() => FilmCountOrderByAggregateInput, {nullable:true})
    _count?: FilmCountOrderByAggregateInput;

    @Field(() => FilmAvgOrderByAggregateInput, {nullable:true})
    _avg?: FilmAvgOrderByAggregateInput;

    @Field(() => FilmMaxOrderByAggregateInput, {nullable:true})
    _max?: FilmMaxOrderByAggregateInput;

    @Field(() => FilmMinOrderByAggregateInput, {nullable:true})
    _min?: FilmMinOrderByAggregateInput;

    @Field(() => FilmSumOrderByAggregateInput, {nullable:true})
    _sum?: FilmSumOrderByAggregateInput;
}
