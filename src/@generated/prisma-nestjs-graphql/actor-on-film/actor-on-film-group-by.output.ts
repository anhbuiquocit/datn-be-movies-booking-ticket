import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActorOnFilmCountAggregate } from './actor-on-film-count-aggregate.output';
import { ActorOnFilmMinAggregate } from './actor-on-film-min-aggregate.output';
import { ActorOnFilmMaxAggregate } from './actor-on-film-max-aggregate.output';

@ObjectType()
export class ActorOnFilmGroupBy {

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    actorId!: string;

    @Field(() => String, {nullable:false})
    filmId!: string;

    @Field(() => ActorOnFilmCountAggregate, {nullable:true})
    _count?: ActorOnFilmCountAggregate;

    @Field(() => ActorOnFilmMinAggregate, {nullable:true})
    _min?: ActorOnFilmMinAggregate;

    @Field(() => ActorOnFilmMaxAggregate, {nullable:true})
    _max?: ActorOnFilmMaxAggregate;
}
