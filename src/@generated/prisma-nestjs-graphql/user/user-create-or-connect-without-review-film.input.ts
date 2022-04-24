import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutReviewFilmInput } from './user-create-without-review-film.input';

@InputType()
export class UserCreateOrConnectWithoutReviewFilmInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReviewFilmInput, {nullable:false})
    create!: UserCreateWithoutReviewFilmInput;
}
