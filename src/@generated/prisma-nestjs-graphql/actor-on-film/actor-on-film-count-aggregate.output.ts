import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ActorOnFilmCountAggregate {

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    actorId!: number;

    @Field(() => Int, {nullable:false})
    filmId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
