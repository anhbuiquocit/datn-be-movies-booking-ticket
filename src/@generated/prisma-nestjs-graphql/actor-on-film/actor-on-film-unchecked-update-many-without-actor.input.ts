import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateWithoutActorInput } from './actor-on-film-create-without-actor.input';
import { ActorOnFilmCreateOrConnectWithoutActorInput } from './actor-on-film-create-or-connect-without-actor.input';
import { ActorOnFilmUpsertWithWhereUniqueWithoutActorInput } from './actor-on-film-upsert-with-where-unique-without-actor.input';
import { ActorOnFilmCreateManyActorInputEnvelope } from './actor-on-film-create-many-actor-input-envelope.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmUpdateWithWhereUniqueWithoutActorInput } from './actor-on-film-update-with-where-unique-without-actor.input';
import { ActorOnFilmUpdateManyWithWhereWithoutActorInput } from './actor-on-film-update-many-with-where-without-actor.input';
import { ActorOnFilmScalarWhereInput } from './actor-on-film-scalar-where.input';

@InputType()
export class ActorOnFilmUncheckedUpdateManyWithoutActorInput {

    @Field(() => [ActorOnFilmCreateWithoutActorInput], {nullable:true})
    create?: Array<ActorOnFilmCreateWithoutActorInput>;

    @Field(() => [ActorOnFilmCreateOrConnectWithoutActorInput], {nullable:true})
    connectOrCreate?: Array<ActorOnFilmCreateOrConnectWithoutActorInput>;

    @Field(() => [ActorOnFilmUpsertWithWhereUniqueWithoutActorInput], {nullable:true})
    upsert?: Array<ActorOnFilmUpsertWithWhereUniqueWithoutActorInput>;

    @Field(() => ActorOnFilmCreateManyActorInputEnvelope, {nullable:true})
    createMany?: ActorOnFilmCreateManyActorInputEnvelope;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    set?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    disconnect?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    delete?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmUpdateWithWhereUniqueWithoutActorInput], {nullable:true})
    update?: Array<ActorOnFilmUpdateWithWhereUniqueWithoutActorInput>;

    @Field(() => [ActorOnFilmUpdateManyWithWhereWithoutActorInput], {nullable:true})
    updateMany?: Array<ActorOnFilmUpdateManyWithWhereWithoutActorInput>;

    @Field(() => [ActorOnFilmScalarWhereInput], {nullable:true})
    deleteMany?: Array<ActorOnFilmScalarWhereInput>;
}
