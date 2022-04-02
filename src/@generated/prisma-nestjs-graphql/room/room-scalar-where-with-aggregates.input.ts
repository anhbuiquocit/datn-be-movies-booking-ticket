import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class RoomScalarWhereWithAggregatesInput {

    @Field(() => [RoomScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoomScalarWhereWithAggregatesInput>;

    @Field(() => [RoomScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoomScalarWhereWithAggregatesInput>;

    @Field(() => [RoomScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoomScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    CinemaId?: StringWithAggregatesFilter;
}
