import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';

@InputType()
export class BookingScalarWhereWithAggregatesInput {

    @Field(() => [BookingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookingScalarWhereWithAggregatesInput>;

    @Field(() => [BookingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookingScalarWhereWithAggregatesInput>;

    @Field(() => [BookingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookingScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    UserId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    amount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    PromotionId?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isPayment?: BoolNullableWithAggregatesFilter;
}
