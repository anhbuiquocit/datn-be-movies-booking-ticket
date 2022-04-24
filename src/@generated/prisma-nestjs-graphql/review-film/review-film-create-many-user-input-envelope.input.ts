import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmCreateManyUserInput } from './review-film-create-many-user.input';

@InputType()
export class ReviewFilmCreateManyUserInputEnvelope {

    @Field(() => [ReviewFilmCreateManyUserInput], {nullable:false})
    data!: Array<ReviewFilmCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
