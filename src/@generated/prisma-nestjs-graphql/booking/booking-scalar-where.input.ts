import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class BookingScalarWhereInput {

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    AND?: Array<BookingScalarWhereInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    OR?: Array<BookingScalarWhereInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    NOT?: Array<BookingScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    UserId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    PromotionId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isPayment?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lineSeatMatrix?: StringNullableFilter;
}
