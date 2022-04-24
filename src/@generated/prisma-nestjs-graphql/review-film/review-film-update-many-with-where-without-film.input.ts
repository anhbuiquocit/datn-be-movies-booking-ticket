import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmScalarWhereInput } from './review-film-scalar-where.input';
import { ReviewFilmUpdateManyMutationInput } from './review-film-update-many-mutation.input';

@InputType()
export class ReviewFilmUpdateManyWithWhereWithoutFilmInput {

    @Field(() => ReviewFilmScalarWhereInput, {nullable:false})
    where!: ReviewFilmScalarWhereInput;

    @Field(() => ReviewFilmUpdateManyMutationInput, {nullable:false})
    data!: ReviewFilmUpdateManyMutationInput;
}
