import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ReviewFilmCountOrderByAggregateInput } from './review-film-count-order-by-aggregate.input';
import { ReviewFilmMaxOrderByAggregateInput } from './review-film-max-order-by-aggregate.input';
import { ReviewFilmMinOrderByAggregateInput } from './review-film-min-order-by-aggregate.input';

@InputType()
export class ReviewFilmOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filmId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comment?: keyof typeof SortOrder;

    @Field(() => ReviewFilmCountOrderByAggregateInput, {nullable:true})
    _count?: ReviewFilmCountOrderByAggregateInput;

    @Field(() => ReviewFilmMaxOrderByAggregateInput, {nullable:true})
    _max?: ReviewFilmMaxOrderByAggregateInput;

    @Field(() => ReviewFilmMinOrderByAggregateInput, {nullable:true})
    _min?: ReviewFilmMinOrderByAggregateInput;
}
