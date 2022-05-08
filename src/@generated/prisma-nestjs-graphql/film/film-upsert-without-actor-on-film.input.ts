import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmUpdateWithoutActorOnFilmInput } from './film-update-without-actor-on-film.input';
import { FilmCreateWithoutActorOnFilmInput } from './film-create-without-actor-on-film.input';

@InputType()
export class FilmUpsertWithoutActorOnFilmInput {

    @Field(() => FilmUpdateWithoutActorOnFilmInput, {nullable:false})
    update!: FilmUpdateWithoutActorOnFilmInput;

    @Field(() => FilmCreateWithoutActorOnFilmInput, {nullable:false})
    create!: FilmCreateWithoutActorOnFilmInput;
}
