import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmCreateWithoutFilmInput } from './review-film-create-without-film.input';

@InputType()
export class ReviewFilmCreateOrConnectWithoutFilmInput {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmCreateWithoutFilmInput, {nullable:false})
    create!: ReviewFilmCreateWithoutFilmInput;
}
