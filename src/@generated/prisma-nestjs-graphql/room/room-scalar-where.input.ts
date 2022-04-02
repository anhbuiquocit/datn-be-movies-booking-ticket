import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class RoomScalarWhereInput {

    @Field(() => [RoomScalarWhereInput], {nullable:true})
    AND?: Array<RoomScalarWhereInput>;

    @Field(() => [RoomScalarWhereInput], {nullable:true})
    OR?: Array<RoomScalarWhereInput>;

    @Field(() => [RoomScalarWhereInput], {nullable:true})
    NOT?: Array<RoomScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    CinemaId?: StringFilter;
}
