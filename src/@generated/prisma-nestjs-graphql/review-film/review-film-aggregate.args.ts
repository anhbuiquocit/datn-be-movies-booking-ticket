import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmWhereInput } from './review-film-where.input';
import { ReviewFilmOrderByWithRelationInput } from './review-film-order-by-with-relation.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewFilmCountAggregateInput } from './review-film-count-aggregate.input';
import { ReviewFilmMinAggregateInput } from './review-film-min-aggregate.input';
import { ReviewFilmMaxAggregateInput } from './review-film-max-aggregate.input';

@ArgsType()
export class ReviewFilmAggregateArgs {

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    where?: ReviewFilmWhereInput;

    @Field(() => [ReviewFilmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewFilmOrderByWithRelationInput>;

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:true})
    cursor?: ReviewFilmWhereUniqueInput;

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
