import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmUpdateWithoutReviewFilmInput } from './film-update-without-review-film.input';
import { FilmCreateWithoutReviewFilmInput } from './film-create-without-review-film.input';

@InputType()
export class FilmUpsertWithoutReviewFilmInput {

    @Field(() => FilmUpdateWithoutReviewFilmInput, {nullable:false})
    update!: FilmUpdateWithoutReviewFilmInput;

    @Field(() => FilmCreateWithoutReviewFilmInput, {nullable:false})
    create!: FilmCreateWithoutReviewFilmInput;
}
