import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ReviewFilmCountAggregate } from './review-film-count-aggregate.output';
import { ReviewFilmMinAggregate } from './review-film-min-aggregate.output';
import { ReviewFilmMaxAggregate } from './review-film-max-aggregate.output';

@ObjectType()
export class AggregateReviewFilm {

    @Field(() => ReviewFilmCountAggregate, {nullable:true})
    _count?: ReviewFilmCountAggregate;

    @Field(() => ReviewFilmMinAggregate, {nullable:true})
    _min?: ReviewFilmMinAggregate;

    @Field(() => ReviewFilmMaxAggregate, {nullable:true})
    _max?: ReviewFilmMaxAggregate;
}
