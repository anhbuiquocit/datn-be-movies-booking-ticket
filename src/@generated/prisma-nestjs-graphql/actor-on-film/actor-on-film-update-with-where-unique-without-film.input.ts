import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmUpdateWithoutFilmInput } from './actor-on-film-update-without-film.input';

@InputType()
export class ActorOnFilmUpdateWithWhereUniqueWithoutFilmInput {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmUpdateWithoutFilmInput, {nullable:false})
    data!: ActorOnFilmUpdateWithoutFilmInput;
}
