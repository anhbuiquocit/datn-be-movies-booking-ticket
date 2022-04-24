import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmUpdateInput } from './review-film-update.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';

@ArgsType()
export class UpdateOneReviewFilmArgs {

    @Field(() => ReviewFilmUpdateInput, {nullable:false})
    data!: ReviewFilmUpdateInput;

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;
}
