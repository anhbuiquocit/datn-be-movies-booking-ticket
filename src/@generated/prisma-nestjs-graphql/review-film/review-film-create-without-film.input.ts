import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutReviewFilmInput } from '../user/user-create-nested-one-without-review-film.input';

@InputType()
export class ReviewFilmCreateWithoutFilmInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserCreateNestedOneWithoutReviewFilmInput, {nullable:false})
    user!: UserCreateNestedOneWithoutReviewFilmInput;

    @Field(() => String, {nullable:true})
    comment?: string;
}
