import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updateAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleteAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthday?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    active?: BoolNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    point?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    role?: StringNullableFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    Order?: OrderListRelationFilter;

    @Field(() => BookingListRelationFilter, {nullable:true})
    Booking?: BookingListRelationFilter;
}
