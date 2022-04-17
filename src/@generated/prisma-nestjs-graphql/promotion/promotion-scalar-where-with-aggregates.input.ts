import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class PromotionScalarWhereWithAggregatesInput {

    @Field(() => [PromotionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PromotionScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PromotionScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PromotionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    discount?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    maxDiscount?: FloatWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endDate?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    startTime?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    endTime?: DateTimeNullableWithAggregatesFilter;
}
