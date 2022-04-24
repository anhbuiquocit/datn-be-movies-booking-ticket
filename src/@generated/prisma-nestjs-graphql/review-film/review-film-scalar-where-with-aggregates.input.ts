import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ReviewFilmScalarWhereWithAggregatesInput {

    @Field(() => [ReviewFilmScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ReviewFilmScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewFilmScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ReviewFilmScalarWhereWithAggregatesInput>;

    @Field(() => [ReviewFilmScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ReviewFilmScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    filmId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    comment?: StringNullableWithAggregatesFilter;
}
