import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmCreateWithoutFilmInput } from './review-film-create-without-film.input';
import { ReviewFilmCreateOrConnectWithoutFilmInput } from './review-film-create-or-connect-without-film.input';
import { ReviewFilmUpsertWithWhereUniqueWithoutFilmInput } from './review-film-upsert-with-where-unique-without-film.input';
import { ReviewFilmCreateManyFilmInputEnvelope } from './review-film-create-many-film-input-envelope.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmUpdateWithWhereUniqueWithoutFilmInput } from './review-film-update-with-where-unique-without-film.input';
import { ReviewFilmUpdateManyWithWhereWithoutFilmInput } from './review-film-update-many-with-where-without-film.input';
import { ReviewFilmScalarWhereInput } from './review-film-scalar-where.input';

@InputType()
export class ReviewFilmUpdateManyWithoutFilmInput {

    @Field(() => [ReviewFilmCreateWithoutFilmInput], {nullable:true})
    create?: Array<ReviewFilmCreateWithoutFilmInput>;

    @Field(() => [ReviewFilmCreateOrConnectWithoutFilmInput], {nullable:true})
    connectOrCreate?: Array<ReviewFilmCreateOrConnectWithoutFilmInput>;

    @Field(() => [ReviewFilmUpsertWithWhereUniqueWithoutFilmInput], {nullable:true})
    upsert?: Array<ReviewFilmUpsertWithWhereUniqueWithoutFilmInput>;

    @Field(() => ReviewFilmCreateManyFilmInputEnvelope, {nullable:true})
    createMany?: ReviewFilmCreateManyFilmInputEnvelope;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    set?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    delete?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmUpdateWithWhereUniqueWithoutFilmInput], {nullable:true})
    update?: Array<ReviewFilmUpdateWithWhereUniqueWithoutFilmInput>;

    @Field(() => [ReviewFilmUpdateManyWithWhereWithoutFilmInput], {nullable:true})
    updateMany?: Array<ReviewFilmUpdateManyWithWhereWithoutFilmInput>;

    @Field(() => [ReviewFilmScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReviewFilmScalarWhereInput>;
}
