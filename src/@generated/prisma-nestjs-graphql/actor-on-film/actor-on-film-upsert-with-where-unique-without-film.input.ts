import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmUpdateWithoutFilmInput } from './actor-on-film-update-without-film.input';
import { ActorOnFilmCreateWithoutFilmInput } from './actor-on-film-create-without-film.input';

@InputType()
export class ActorOnFilmUpsertWithWhereUniqueWithoutFilmInput {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmUpdateWithoutFilmInput, {nullable:false})
    update!: ActorOnFilmUpdateWithoutFilmInput;

    @Field(() => ActorOnFilmCreateWithoutFilmInput, {nullable:false})
    create!: ActorOnFilmCreateWithoutFilmInput;
}
