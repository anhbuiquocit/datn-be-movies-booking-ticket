import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutActorOnFilmInput } from './actor-create-without-actor-on-film.input';
import { ActorCreateOrConnectWithoutActorOnFilmInput } from './actor-create-or-connect-without-actor-on-film.input';
import { ActorUpsertWithoutActorOnFilmInput } from './actor-upsert-without-actor-on-film.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorUpdateWithoutActorOnFilmInput } from './actor-update-without-actor-on-film.input';

@InputType()
export class ActorUpdateOneRequiredWithoutActorOnFilmInput {

    @Field(() => ActorCreateWithoutActorOnFilmInput, {nullable:true})
    create?: ActorCreateWithoutActorOnFilmInput;

    @Field(() => ActorCreateOrConnectWithoutActorOnFilmInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutActorOnFilmInput;

    @Field(() => ActorUpsertWithoutActorOnFilmInput, {nullable:true})
    upsert?: ActorUpsertWithoutActorOnFilmInput;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;

    @Field(() => ActorUpdateWithoutActorOnFilmInput, {nullable:true})
    update?: ActorUpdateWithoutActorOnFilmInput;
}
