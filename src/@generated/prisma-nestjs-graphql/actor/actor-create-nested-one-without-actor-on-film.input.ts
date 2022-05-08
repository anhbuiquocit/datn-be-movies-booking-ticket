import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorCreateWithoutActorOnFilmInput } from './actor-create-without-actor-on-film.input';
import { ActorCreateOrConnectWithoutActorOnFilmInput } from './actor-create-or-connect-without-actor-on-film.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';

@InputType()
export class ActorCreateNestedOneWithoutActorOnFilmInput {

    @Field(() => ActorCreateWithoutActorOnFilmInput, {nullable:true})
    create?: ActorCreateWithoutActorOnFilmInput;

    @Field(() => ActorCreateOrConnectWithoutActorOnFilmInput, {nullable:true})
    connectOrCreate?: ActorCreateOrConnectWithoutActorOnFilmInput;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    connect?: ActorWhereUniqueInput;
}
