import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutFilmInput } from './showing-create-without-film.input';
import { ShowingCreateOrConnectWithoutFilmInput } from './showing-create-or-connect-without-film.input';
import { ShowingCreateManyFilmInputEnvelope } from './showing-create-many-film-input-envelope.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@InputType()
export class ShowingUncheckedCreateNestedManyWithoutFilmInput {

    @Field(() => [ShowingCreateWithoutFilmInput], {nullable:true})
    create?: Array<ShowingCreateWithoutFilmInput>;

    @Field(() => [ShowingCreateOrConnectWithoutFilmInput], {nullable:true})
    connectOrCreate?: Array<ShowingCreateOrConnectWithoutFilmInput>;

    @Field(() => ShowingCreateManyFilmInputEnvelope, {nullable:true})
    createMany?: ShowingCreateManyFilmInputEnvelope;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    connect?: Array<ShowingWhereUniqueInput>;
}
