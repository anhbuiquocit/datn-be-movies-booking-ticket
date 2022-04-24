import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmCreateWithoutUserInput } from './review-film-create-without-user.input';
import { ReviewFilmCreateOrConnectWithoutUserInput } from './review-film-create-or-connect-without-user.input';
import { ReviewFilmCreateManyUserInputEnvelope } from './review-film-create-many-user-input-envelope.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';

@InputType()
export class ReviewFilmUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [ReviewFilmCreateWithoutUserInput], {nullable:true})
    create?: Array<ReviewFilmCreateWithoutUserInput>;

    @Field(() => [ReviewFilmCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<ReviewFilmCreateOrConnectWithoutUserInput>;

    @Field(() => ReviewFilmCreateManyUserInputEnvelope, {nullable:true})
    createMany?: ReviewFilmCreateManyUserInputEnvelope;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewFilmWhereUniqueInput>;
}
