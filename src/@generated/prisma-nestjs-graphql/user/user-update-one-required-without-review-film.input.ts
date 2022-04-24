import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewFilmInput } from './user-create-without-review-film.input';
import { UserCreateOrConnectWithoutReviewFilmInput } from './user-create-or-connect-without-review-film.input';
import { UserUpsertWithoutReviewFilmInput } from './user-upsert-without-review-film.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutReviewFilmInput } from './user-update-without-review-film.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewFilmInput {

    @Field(() => UserCreateWithoutReviewFilmInput, {nullable:true})
    create?: UserCreateWithoutReviewFilmInput;

    @Field(() => UserCreateOrConnectWithoutReviewFilmInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReviewFilmInput;

    @Field(() => UserUpsertWithoutReviewFilmInput, {nullable:true})
    upsert?: UserUpsertWithoutReviewFilmInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutReviewFilmInput, {nullable:true})
    update?: UserUpdateWithoutReviewFilmInput;
}
