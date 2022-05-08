import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ActorOnFilm } from '../actor-on-film/actor-on-film.model';
import { ActorCount } from './actor-count.output';

@ObjectType()
export class Actor {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    birthday!: Date | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => [ActorOnFilm], {nullable:true})
    ActorOnFilm?: Array<ActorOnFilm>;

    @Field(() => ActorCount, {nullable:false})
    _count?: ActorCount;
}
