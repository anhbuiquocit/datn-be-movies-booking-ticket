import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmCreateInput } from './review-film-create.input';

@ArgsType()
export class CreateOneReviewFilmArgs {

    @Field(() => ReviewFilmCreateInput, {nullable:false})
    data!: ReviewFilmCreateInput;
}
