import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { FilmListRelationFilter } from '../film/film-list-relation-filter.input';

@InputType()
export class CategoryWhereInput {

    @Field(() => [CategoryWhereInput], {nullable:true})
    AND?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    OR?: Array<CategoryWhereInput>;

    @Field(() => [CategoryWhereInput], {nullable:true})
    NOT?: Array<CategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleteAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => FilmListRelationFilter, {nullable:true})
    Film?: FilmListRelationFilter;
}
