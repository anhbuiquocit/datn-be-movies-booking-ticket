import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmMinAggregate } from './film-min-aggregate.output';
import { FilmMaxAggregate } from './film-max-aggregate.output';

@ObjectType()
export class AggregateFilm {

    @Field(() => FilmCountAggregate, {nullable:true})
    _count?: FilmCountAggregate;

    @Field(() => FilmMinAggregate, {nullable:true})
    _min?: FilmMinAggregate;

    @Field(() => FilmMaxAggregate, {nullable:true})
    _max?: FilmMaxAggregate;
}
