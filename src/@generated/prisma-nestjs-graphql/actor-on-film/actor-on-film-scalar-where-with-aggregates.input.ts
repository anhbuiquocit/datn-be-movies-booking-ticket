import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ActorOnFilmScalarWhereWithAggregatesInput {

    @Field(() => [ActorOnFilmScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActorOnFilmScalarWhereWithAggregatesInput>;

    @Field(() => [ActorOnFilmScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActorOnFilmScalarWhereWithAggregatesInput>;

    @Field(() => [ActorOnFilmScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActorOnFilmScalarWhereWithAggregatesInput>;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    actorId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    filmId?: StringWithAggregatesFilter;
}
