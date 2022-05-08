import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutActorOnFilmInput } from './film-create-without-actor-on-film.input';
import { FilmCreateOrConnectWithoutActorOnFilmInput } from './film-create-or-connect-without-actor-on-film.input';
import { FilmUpsertWithoutActorOnFilmInput } from './film-upsert-without-actor-on-film.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutActorOnFilmInput } from './film-update-without-actor-on-film.input';

@InputType()
export class FilmUpdateOneRequiredWithoutActorOnFilmInput {

    @Field(() => FilmCreateWithoutActorOnFilmInput, {nullable:true})
    create?: FilmCreateWithoutActorOnFilmInput;

    @Field(() => FilmCreateOrConnectWithoutActorOnFilmInput, {nullable:true})
    connectOrCreate?: FilmCreateOrConnectWithoutActorOnFilmInput;

    @Field(() => FilmUpsertWithoutActorOnFilmInput, {nullable:true})
    upsert?: FilmUpsertWithoutActorOnFilmInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    connect?: FilmWhereUniqueInput;

    @Field(() => FilmUpdateWithoutActorOnFilmInput, {nullable:true})
    update?: FilmUpdateWithoutActorOnFilmInput;
}
