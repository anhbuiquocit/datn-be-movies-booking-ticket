import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmUpdateWithoutUserInput } from './review-film-update-without-user.input';
import { ReviewFilmCreateWithoutUserInput } from './review-film-create-without-user.input';

@InputType()
export class ReviewFilmUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmUpdateWithoutUserInput, {nullable:false})
    update!: ReviewFilmUpdateWithoutUserInput;

    @Field(() => ReviewFilmCreateWithoutUserInput, {nullable:false})
    create!: ReviewFilmCreateWithoutUserInput;
}
