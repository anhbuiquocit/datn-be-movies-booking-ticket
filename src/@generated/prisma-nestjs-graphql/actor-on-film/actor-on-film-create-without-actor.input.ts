import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateNestedOneWithoutActorOnFilmInput } from '../film/film-create-nested-one-without-actor-on-film.input';

@InputType()
export class ActorOnFilmCreateWithoutActorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => FilmCreateNestedOneWithoutActorOnFilmInput, {nullable:false})
    film!: FilmCreateNestedOneWithoutActorOnFilmInput;
}
