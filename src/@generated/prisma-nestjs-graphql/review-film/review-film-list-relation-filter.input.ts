import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewFilmWhereInput } from './review-film-where.input';

@InputType()
export class ReviewFilmListRelationFilter {

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    every?: ReviewFilmWhereInput;

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    some?: ReviewFilmWhereInput;

    @Field(() => ReviewFilmWhereInput, {nullable:true})
    none?: ReviewFilmWhereInput;
}
