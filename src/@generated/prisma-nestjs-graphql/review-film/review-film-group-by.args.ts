import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmWhereInput } from './review-film-where.input';
import { ReviewFilmOrderByWithAggregationInput } from './review-film-order-by-with-aggregation.input';
import { ReviewFilmScalarFieldEnum } from './review-film-scalar-field.enum';
import { ReviewFilmScalarWhereWithAggregatesInput } from './review-film-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewFilmCountAggregateInput } from './review-film-count-aggregate.input';
import { ReviewFilmMinAggregateInput } from './review-film-min-aggregate.input';
import { ReviewFilmMaxAggregateInput } from './review-film-max-aggregate.input';

@ArgsType()
export class ReviewFilmGroupByArgs {

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    where?: ReviewFilmWhereInput;

    @Field(() => [ReviewFilmOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewFilmOrderByWithAggregationInput>;

    @Field(() => [ReviewFilmScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewFilmScalarFieldEnum>;

    @Field(() => ReviewFilmScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewFilmScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewFilmCountAggregateInput, {nullable:true})
    _count?: ReviewFilmCountAggregateInput;

    @Field(() => ReviewFilmMinAggregateInput, {nullable:true})
    _min?: ReviewFilmMinAggregateInput;

    @Field(() => ReviewFilmMaxAggregateInput, {nullable:true})
    _max?: ReviewFilmMaxAggregateInput;
}
