import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmCreateWithoutFilmInput } from './review-film-create-without-film.input';
import { ReviewFilmCreateOrConnectWithoutFilmInput } from './review-film-create-or-connect-without-film.input';
import { ReviewFilmCreateManyFilmInputEnvelope } from './review-film-create-many-film-input-envelope.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';

@InputType()
export class ReviewFilmCreateNestedManyWithoutFilmInput {

    @Field(() => [ReviewFilmCreateWithoutFilmInput], {nullable:true})
    create?: Array<ReviewFilmCreateWithoutFilmInput>;

    @Field(() => [ReviewFilmCreateOrConnectWithoutFilmInput], {nullable:true})
    connectOrCreate?: Array<ReviewFilmCreateOrConnectWithoutFilmInput>;

    @Field(() => ReviewFilmCreateManyFilmInputEnvelope, {nullable:true})
    createMany?: ReviewFilmCreateManyFilmInputEnvelope;

    @Field(() => [ReviewFilmWhereUniqueInput], {nullable:true})
    connect?: Array<ReviewFilmWhereUniqueInput>;
}
