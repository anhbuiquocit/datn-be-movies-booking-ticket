import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmUpdateWithoutUserInput } from './review-film-update-without-user.input';

@InputType()
export class ReviewFilmUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmUpdateWithoutUserInput, {nullable:false})
    data!: ReviewFilmUpdateWithoutUserInput;
}
