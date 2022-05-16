import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmAvgAggregate } from './film-avg-aggregate.output';
import { FilmSumAggregate } from './film-sum-aggregate.output';
import { FilmMinAggregate } from './film-min-aggregate.output';
import { FilmMaxAggregate } from './film-max-aggregate.output';

@ObjectType()
export class AggregateFilm {

    @Field(() => FilmCountAggregate, {nullable:true})
    _count?: FilmCountAggregate;

    @Field(() => FilmAvgAggregate, {nullable:true})
    _avg?: FilmAvgAggregate;

    @Field(() => FilmSumAggregate, {nullable:true})
    _sum?: FilmSumAggregate;

    @Field(() => FilmMinAggregate, {nullable:true})
    _min?: FilmMinAggregate;

    @Field(() => FilmMaxAggregate, {nullable:true})
    _max?: FilmMaxAggregate;
}
