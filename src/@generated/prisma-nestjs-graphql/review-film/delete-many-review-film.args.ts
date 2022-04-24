import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmWhereInput } from './review-film-where.input';

@ArgsType()
export class DeleteManyReviewFilmArgs {

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    where?: ReviewFilmWhereInput;
}
