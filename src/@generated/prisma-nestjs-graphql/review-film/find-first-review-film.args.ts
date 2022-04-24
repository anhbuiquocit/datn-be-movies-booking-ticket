import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewFilmWhereInput } from './review-film-where.input';
import { ReviewFilmOrderByWithRelationInput } from './review-film-order-by-with-relation.input';
import { ReviewFilmWhereUniqueInput } from './review-film-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewFilmScalarFieldEnum } from './review-film-scalar-field.enum';

@ArgsType()
export class FindFirstReviewFilmArgs {

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    where?: ReviewFilmWhereInput;

    @Field(() => [ReviewFilmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ReviewFilmOrderByWithRelationInput>;

    @Field(() => ReviewFilmWhereUniqueInput, {nullable:true})
    cursor?: ReviewFilmWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ReviewFilmScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ReviewFilmScalarFieldEnum>;
}
