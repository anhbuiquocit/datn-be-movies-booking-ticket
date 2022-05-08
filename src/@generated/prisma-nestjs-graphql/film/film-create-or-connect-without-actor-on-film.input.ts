import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateWithoutActorOnFilmInput } from './film-create-without-actor-on-film.input';

@InputType()
export class FilmCreateOrConnectWithoutActorOnFilmInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmCreateWithoutActorOnFilmInput, {nullable:false})
    create!: FilmCreateWithoutActorOnFilmInput;
}
