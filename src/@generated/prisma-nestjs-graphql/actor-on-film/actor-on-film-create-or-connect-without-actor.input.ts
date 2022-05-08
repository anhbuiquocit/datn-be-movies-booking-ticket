import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmCreateWithoutActorInput } from './actor-on-film-create-without-actor.input';

@InputType()
export class ActorOnFilmCreateOrConnectWithoutActorInput {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmCreateWithoutActorInput, {nullable:false})
    create!: ActorOnFilmCreateWithoutActorInput;
}
