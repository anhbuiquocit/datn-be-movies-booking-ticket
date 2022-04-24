import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { ReviewFilmCreateInput } from './review-film-create.input';
import { ReviewFilmUpdateInput } from './review-film-update.input';

@ArgsType()
export class UpsertOneReviewFilmArgs {

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:false})
    where!: ReviewFilmWhereUniqueInput;

    @Field(() => ReviewFilmCreateInput, {nullable:false})
    create!: ReviewFilmCreateInput;

    @Field(() => ReviewFilmUpdateInput, {nullable:false})
    update!: ReviewFilmUpdateInput;
}
