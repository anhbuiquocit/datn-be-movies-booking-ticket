import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReviewFilmInput } from '../user/user-create-nested-one-without-review-film.input';
import { FilmCreateNestedOneWithoutReviewFilmInput } from '../film/film-create-nested-one-without-review-film.input';

@InputType()
export class ReviewFilmCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutReviewFilmInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReviewFilmInput;

    @Field(() => FilmCreateNestedOneWithoutReviewFilmInput, {nullable:false})
    film!: FilmCreateNestedOneWithoutReviewFilmInput;

    @Field(() => String, {nullable:true})
    comment?: string;
}
