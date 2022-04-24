import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmUpdateWithoutFilmInput } from './review-film-update-without-film.input';

@InputType()
export class ReviewFilmUpdateWithWhereUniqueWithoutFilmInput {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmUpdateWithoutFilmInput, {nullable:false})
    data!: ReviewFilmUpdateWithoutFilmInput;
}
