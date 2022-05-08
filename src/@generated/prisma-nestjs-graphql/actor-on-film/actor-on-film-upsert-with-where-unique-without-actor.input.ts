import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmUpdateWithoutActorInput } from './actor-on-film-update-without-actor.input';
import { ActorOnFilmCreateWithoutActorInput } from './actor-on-film-create-without-actor.input';

@InputType()
export class ActorOnFilmUpsertWithWhereUniqueWithoutActorInput {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmUpdateWithoutActorInput, {nullable:false})
    update!: ActorOnFilmUpdateWithoutActorInput;

    @Field(() => ActorOnFilmCreateWithoutActorInput, {nullable:false})
    create!: ActorOnFilmCreateWithoutActorInput;
}
