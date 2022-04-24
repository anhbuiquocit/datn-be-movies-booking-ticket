import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmUpdateManyMutationInput } from './review-film-update-many-mutation.input';
import { ReviewFilmWhereInput } from './review-film-where.input';

@ArgsType()
export class UpdateManyReviewFilmArgs {

    @Field(() => ReviewFilmUpdateManyMutationInput, {nullable:false})
    data!: ReviewFilmUpdateManyMutationInput;

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    where?: ReviewFilmWhereInput;
}
