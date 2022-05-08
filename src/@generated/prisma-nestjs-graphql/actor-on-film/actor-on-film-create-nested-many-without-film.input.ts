import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateWithoutFilmInput } from './actor-on-film-create-without-film.input';
import { ActorOnFilmCreateOrConnectWithoutFilmInput } from './actor-on-film-create-or-connect-without-film.input';
import { ActorOnFilmCreateManyFilmInputEnvelope } from './actor-on-film-create-many-film-input-envelope.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';

@InputType()
export class ActorOnFilmCreateNestedManyWithoutFilmInput {

    @Field(() => [ActorOnFilmCreateWithoutFilmInput], {nullable:true})
    create?: Array<ActorOnFilmCreateWithoutFilmInput>;

    @Field(() => [ActorOnFilmCreateOrConnectWithoutFilmInput], {nullable:true})
    connectOrCreate?: Array<ActorOnFilmCreateOrConnectWithoutFilmInput>;

    @Field(() => ActorOnFilmCreateManyFilmInputEnvelope, {nullable:true})
    createMany?: ActorOnFilmCreateManyFilmInputEnvelope;

    @Field(() => [ActorOnFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ActorOnFilmWhereUniqueInput>;
}
