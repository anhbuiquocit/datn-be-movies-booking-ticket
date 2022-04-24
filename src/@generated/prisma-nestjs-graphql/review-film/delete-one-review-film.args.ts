import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';

@ArgsType()
export class DeleteOneReviewFilmArgs {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;
}
