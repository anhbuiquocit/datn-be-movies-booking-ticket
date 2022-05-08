import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorUpdateWithoutActorOnFilmInput } from './actor-update-without-actor-on-film.input';
import { ActorCreateWithoutActorOnFilmInput } from './actor-create-without-actor-on-film.input';

@InputType()
export class ActorUpsertWithoutActorOnFilmInput {

    @Field(() => ActorUpdateWithoutActorOnFilmInput, {nullable:false})
    update!: ActorUpdateWithoutActorOnFilmInput;

    @Field(() => ActorCreateWithoutActorOnFilmInput, {nullable:false})
    create!: ActorCreateWithoutActorOnFilmInput;
}
