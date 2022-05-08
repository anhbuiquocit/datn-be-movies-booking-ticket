import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutActorOnFilmInput } from './film-create-without-actor-on-film.input';
import { FilmCreateOrConnectWithoutActorOnFilmInput } from './film-create-or-connect-without-actor-on-film.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@InputType()
export class FilmCreateNestedOneWithoutActorOnFilmInput {

    @Field(() => FilmCreateWithoutActorOnFilmInput, {nullable:true})
    create?: FilmCreateWithoutActorOnFilmInput;

    @Field(() => FilmCreateOrConnectWithoutActorOnFilmInput, {nullable:true})
    connectOrCreate?: FilmCreateOrConnectWithoutActorOnFilmInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    connect?: FilmWhereUniqueInput;
}
