import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutReviewFilmInput } from './user-update-without-review-film.input';
import { UserCreateWithoutReviewFilmInput } from './user-create-without-review-film.input';

@InputType()
export class UserUpsertWithoutReviewFilmInput {

    @Field(() => UserUpdateWithoutReviewFilmInput, {nullable:false})
    update!: UserUpdateWithoutReviewFilmInput;

    @Field(() => UserCreateWithoutReviewFilmInput, {nullable:false})
    create!: UserCreateWithoutReviewFilmInput;
}
