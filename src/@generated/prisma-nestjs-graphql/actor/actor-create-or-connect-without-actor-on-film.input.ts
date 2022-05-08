import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCreateWithoutActorOnFilmInput } from './actor-create-without-actor-on-film.input';

@InputType()
export class ActorCreateOrConnectWithoutActorOnFilmInput {

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;

    @Field(() => ActorCreateWithoutActorOnFilmInput, {nullable:false})
    create!: ActorCreateWithoutActorOnFilmInput;
}
