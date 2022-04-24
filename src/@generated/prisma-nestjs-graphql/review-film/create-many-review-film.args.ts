import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmCreateManyInput } from './review-film-create-many.input';

@ArgsType()
export class CreateManyReviewFilmArgs {

    @Field(() => [ReviewFilmCreateManyInput], {nullable:false})
    data!: Array<ReviewFilmCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
