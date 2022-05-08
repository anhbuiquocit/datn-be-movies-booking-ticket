import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Actor } from '../actor/actor.model';
import { Film } from '../film/film.model';

@ObjectType()
export class ActorOnFilm {

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Actor, {nullable:false})
    actor?: Actor;

    @Field(() => String, {nullable:false})
    actorId!: string;

    @Field(() => Film, {nullable:false})
    film?: Film;

    @Field(() => String, {nullable:false})
    filmId!: string;
}
