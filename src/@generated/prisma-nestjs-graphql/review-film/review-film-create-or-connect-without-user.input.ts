import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmCreateWithoutUserInput } from './review-film-create-without-user.input';

@InputType()
export class ReviewFilmCreateOrConnectWithoutUserInput {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmCreateWithoutUserInput, {nullable:false})
    create!: ReviewFilmCreateWithoutUserInput;
}
