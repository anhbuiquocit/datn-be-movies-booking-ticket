import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateNestedOneWithoutReviewFilmInput } from '../film/film-create-nested-one-without-review-film.input';

@InputType()
export class ReviewFilmCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => FilmCreateNestedOneWithoutReviewFilmInput, {nullable:false})
    film!: FilmCreateNestedOneWithoutReviewFilmInput;

    @Field(() => String, {nullable:true})
    comment?: string;
}
