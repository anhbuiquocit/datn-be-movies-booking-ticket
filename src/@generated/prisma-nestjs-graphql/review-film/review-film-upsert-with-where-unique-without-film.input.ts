import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmUpdateWithoutFilmInput } from './review-film-update-without-film.input';
import { ReviewFilmCreateWithoutFilmInput } from './review-film-create-without-film.input';

@InputType()
export class ReviewFilmUpsertWithWhereUniqueWithoutFilmInput {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmUpdateWithoutFilmInput, {nullable:false})
    update!: ReviewFilmUpdateWithoutFilmInput;

    @Field(() => ReviewFilmCreateWithoutFilmInput, {nullable:false})
    create!: ReviewFilmCreateWithoutFilmInput;
}
