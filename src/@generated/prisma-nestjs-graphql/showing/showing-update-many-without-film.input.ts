import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutFilmInput } from './showing-create-without-film.input';
import { ShowingCreateOrConnectWithoutFilmInput } from './showing-create-or-connect-without-film.input';
import { ShowingUpsertWithWhereUniqueWithoutFilmInput } from './showing-upsert-with-where-unique-without-film.input';
import { ShowingCreateManyFilmInputEnvelope } from './showing-create-many-film-input-envelope.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithWhereUniqueWithoutFilmInput } from './showing-update-with-where-unique-without-film.input';
import { ShowingUpdateManyWithWhereWithoutFilmInput } from './showing-update-many-with-where-without-film.input';
import { ShowingScalarWhereInput } from './showing-scalar-where.input';

@InputType()
export class ShowingUpdateManyWithoutFilmInput {

    @Field(() => [ShowingCreateWithoutFilmInput], {nullable:true})
    create?: Array<ShowingCreateWithoutFilmInput>;

    @Field(() => [ShowingCreateOrConnectWithoutFilmInput], {nullable:true})
    connectOrCreate?: Array<ShowingCreateOrConnectWithoutFilmInput>;

    @Field(() => [ShowingUpsertWithWhereUniqueWithoutFilmInput], {nullable:true})
    upsert?: Array<ShowingUpsertWithWhereUniqueWithoutFilmInput>;

    @Field(() => ShowingCreateManyFilmInputEnvelope, {nullable:true})
    createMany?: ShowingCreateManyFilmInputEnvelope;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    set?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    delete?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    connect?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingUpdateWithWhereUniqueWithoutFilmInput], {nullable:true})
    update?: Array<ShowingUpdateWithWhereUniqueWithoutFilmInput>;

    @Field(() => [ShowingUpdateManyWithWhereWithoutFilmInput], {nullable:true})
    updateMany?: Array<ShowingUpdateManyWithWhereWithoutFilmInput>;

    @Field(() => [ShowingScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShowingScalarWhereInput>;
}
