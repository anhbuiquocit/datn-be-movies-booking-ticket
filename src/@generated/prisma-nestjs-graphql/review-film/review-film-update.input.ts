import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutReviewFilmInput } from '../user/user-update-one-required-without-review-film.input';
import { FilmUpdateOneRequiredWithoutReviewFilmInput } from '../film/film-update-one-required-without-review-film.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class ReviewFilmUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutReviewFilmInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutReviewFilmInput;

    @Field(() => FilmUpdateOneRequiredWithoutReviewFilmInput, {nullable:true})
    film?: FilmUpdateOneRequiredWithoutReviewFilmInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    comment?: NullableStringFieldUpdateOperationsInput;
}
