import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class SeatScalarWhereInput {

    @Field(() => [SeatScalarWhereInput], {nullable:true})
    AND?: Array<SeatScalarWhereInput>;

    @Field(() => [SeatScalarWhereInput], {nullable:true})
    OR?: Array<SeatScalarWhereInput>;

    @Field(() => [SeatScalarWhereInput], {nullable:true})
    NOT?: Array<SeatScalarWhereInput>;

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
    position?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    RoomId?: StringFilter;
}
