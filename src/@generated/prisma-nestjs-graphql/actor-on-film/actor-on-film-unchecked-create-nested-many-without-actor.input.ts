import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateWithoutActorInput } from './actor-on-film-create-without-actor.input';
import { ActorOnFilmCreateOrConnectWithoutActorInput } from './actor-on-film-create-or-connect-without-actor.input';
import { ActorOnFilmCreateManyActorInputEnvelope } from './actor-on-film-create-many-actor-input-envelope.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';

@InputType()
export class ActorOnFilmUncheckedCreateNestedManyWithoutActorInput {

    @Field(() => [ActorOnFilmCreateWithoutActorInput], {nullable:true})
    create?: Array<ActorOnFilmCreateWithoutActorInput>;

    @Field(() => [ActorOnFilmCreateOrConnectWithoutActorInput], {nullable:true})
    connectOrCreate?: Array<ActorOnFilmCreateOrConnectWithoutActorInput>;

    @Field(() => ActorOnFilmCreateManyActorInputEnvelope, {nullable:true})
    createMany?: ActorOnFilmCreateManyActorInputEnvelope;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ActorOnFilmWhereUniqueInput>;
}
