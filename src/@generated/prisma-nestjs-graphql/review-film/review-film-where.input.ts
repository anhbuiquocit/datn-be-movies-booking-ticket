import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { FilmRelationFilter } from '../film/film-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ReviewFilmWhereInput {

    @Field(() => [ReviewFilmWhereInput], {nullable:true})
    AND?: Array<ReviewFilmWhereInput>;

    @Field(() => [ReviewFilmWhereInput], {nullable:true})
    OR?: Array<ReviewFilmWhereInput>;

    @Field(() => [ReviewFilmWhereInput], {nullable:true})
    NOT?: Array<ReviewFilmWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => FilmRelationFilter, {nullable:true})
    film?: FilmRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    filmId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;
}
