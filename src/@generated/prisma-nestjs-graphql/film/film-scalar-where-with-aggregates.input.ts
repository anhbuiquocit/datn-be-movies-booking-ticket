import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class FilmScalarWhereWithAggregatesInput {

    @Field(() => [FilmScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FilmScalarWhereWithAggregatesInput>;

    @Field(() => [FilmScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FilmScalarWhereWithAggregatesInput>;

    @Field(() => [FilmScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FilmScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    trailler?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    director?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    actor?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    time?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    image?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imageDescription1?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imageDescription2?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    imageDescription3?: StringNullableWithAggregatesFilter;
}
