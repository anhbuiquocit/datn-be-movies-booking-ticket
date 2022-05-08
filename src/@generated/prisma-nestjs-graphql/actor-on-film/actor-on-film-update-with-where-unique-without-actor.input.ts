import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmUpdateWithoutActorInput } from './actor-on-film-update-without-actor.input';

@InputType()
export class ActorOnFilmUpdateWithWhereUniqueWithoutActorInput {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmUpdateWithoutActorInput, {nullable:false})
    data!: ActorOnFilmUpdateWithoutActorInput;
}
