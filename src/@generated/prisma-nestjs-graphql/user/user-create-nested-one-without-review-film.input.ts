import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewFilmInput } from './user-create-without-review-film.input';
import { UserCreateOrConnectWithoutReviewFilmInput } from './user-create-or-connect-without-review-film.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewFilmInput {

    @Field(() => UserCreateWithoutReviewFilmInput, {nullable:true})
    create?: UserCreateWithoutReviewFilmInput;

    @Field(() => UserCreateOrConnectWithoutReviewFilmInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutReviewFilmInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
