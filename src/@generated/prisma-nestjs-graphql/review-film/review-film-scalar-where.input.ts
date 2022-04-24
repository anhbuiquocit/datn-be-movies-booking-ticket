import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ReviewFilmScalarWhereInput {

    @Field(() => [ReviewFilmScalarWhereInput], {nullable:true})
    AND?: Array<ReviewFilmScalarWhereInput>;

    @Field(() => [ReviewFilmScalarWhereInput], {nullable:true})
    OR?: Array<ReviewFilmScalarWhereInput>;

    @Field(() => [ReviewFilmScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewFilmScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    filmId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    comment?: StringNullableFilter;
}
