import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateWithoutFilmInput } from './actor-on-film-create-without-film.input';
import { ActorOnFilmCreateOrConnectWithoutFilmInput } from './actor-on-film-create-or-connect-without-film.input';
import { ActorOnFilmUpsertWithWhereUniqueWithoutFilmInput } from './actor-on-film-upsert-with-where-unique-without-film.input';
import { ActorOnFilmCreateManyFilmInputEnvelope } from './actor-on-film-create-many-film-input-envelope.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmUpdateWithWhereUniqueWithoutFilmInput } from './actor-on-film-update-with-where-unique-without-film.input';
import { ActorOnFilmUpdateManyWithWhereWithoutFilmInput } from './actor-on-film-update-many-with-where-without-film.input';
import { ActorOnFilmScalarWhereInput } from './actor-on-film-scalar-where.input';

@InputType()
export class ActorOnFilmUncheckedUpdateManyWithoutFilmInput {

    @Field(() => [ActorOnFilmCreateWithoutFilmInput], {nullable:true})
    create?: Array<ActorOnFilmCreateWithoutFilmInput>;

    @Field(() => [ActorOnFilmCreateOrConnectWithoutFilmInput], {nullable:true})
    connectOrCreate?: Array<ActorOnFilmCreateOrConnectWithoutFilmInput>;

    @Field(() => [ActorOnFilmUpsertWithWhereUniqueWithoutFilmInput], {nullable:true})
    upsert?: Array<ActorOnFilmUpsertWithWhereUniqueWithoutFilmInput>;

    @Field(() => ActorOnFilmCreateManyFilmInputEnvelope, {nullable:true})
    createMany?: ActorOnFilmCreateManyFilmInputEnvelope;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    set?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    disconnect?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    delete?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ActorOnFilmWhereUniqueInput>;

    @Field(() => [ActorOnFilmUpdateWithWhereUniqueWithoutFilmInput], {nullable:true})
    update?: Array<ActorOnFilmUpdateWithWhereUniqueWithoutFilmInput>;

    @Field(() => [ActorOnFilmUpdateManyWithWhereWithoutFilmInput], {nullable:true})
    updateMany?: Array<ActorOnFilmUpdateManyWithWhereWithoutFilmInput>;

    @Field(() => [ActorOnFilmScalarWhereInput], {nullable:true})
    deleteMany?: Array<ActorOnFilmScalarWhereInput>;
}
