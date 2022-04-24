import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmCreateWithoutUserInput } from './review-film-create-without-user.input';
import { ReviewFilmCreateOrConnectWithoutUserInput } from './review-film-create-or-connect-without-user.input';
import { ReviewFilmUpsertWithWhereUniqueWithoutUserInput } from './review-film-upsert-with-where-unique-without-user.input';
import { ReviewFilmCreateManyUserInputEnvelope } from './review-film-create-many-user-input-envelope.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmUpdateWithWhereUniqueWithoutUserInput } from './review-film-update-with-where-unique-without-user.input';
import { ReviewFilmUpdateManyWithWhereWithoutUserInput } from './review-film-update-many-with-where-without-user.input';
import { ReviewFilmScalarWhereInput } from './review-film-scalar-where.input';

@InputType()
export class ReviewFilmUncheckedUpdateManyWithoutUserInput {

    @Field(() => [ReviewFilmCreateWithoutUserInput], {nullable:true})
    create?: Array<ReviewFilmCreateWithoutUserInput>;

    @Field(() => [ReviewFilmCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReviewFilmCreateOrConnectWithoutUserInput>;

    @Field(() => [ReviewFilmUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<ReviewFilmUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => ReviewFilmCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReviewFilmCreateManyUserInputEnvelope;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    set?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    disconnect?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    delete?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewFilmWhereUniqueInput>;

    @Field(() => [ReviewFilmUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<ReviewFilmUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [ReviewFilmUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<ReviewFilmUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [ReviewFilmScalarWhereInput], {nullable:true})
    deleteMany?: Array<ReviewFilmScalarWhereInput>;
}
