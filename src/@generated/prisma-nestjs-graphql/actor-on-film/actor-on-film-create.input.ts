import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateNestedOneWithoutActorOnFilmInput } from '../actor/actor-create-nested-one-without-actor-on-film.input';
import { FilmCreateNestedOneWithoutActorOnFilmInput } from '../film/film-create-nested-one-without-actor-on-film.input';

@InputType()
export class ActorOnFilmCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ActorCreateNestedOneWithoutActorOnFilmInput, {nullable:false})
    actor!: ActorCreateNestedOneWithoutActorOnFilmInput;

    @Field(() => FilmCreateNestedOneWithoutActorOnFilmInput, {nullable:false})
    film!: FilmCreateNestedOneWithoutActorOnFilmInput;
}
