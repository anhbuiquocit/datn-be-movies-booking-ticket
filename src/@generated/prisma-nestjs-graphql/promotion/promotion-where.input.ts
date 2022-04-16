import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BookingListRelationFilter } from '../booking/booking-list-relation-filter.input';

@InputType()
export class PromotionWhereInput {

    @Field(() => [PromotionWhereInput], {nullable:true})
    AND?: Array<PromotionWhereInput>;

    @Field(() => [PromotionWhereInput], {nullable:true})
    OR?: Array<PromotionWhereInput>;

    @Field(() => [PromotionWhereInput], {nullable:true})
    NOT?: Array<PromotionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    discount?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    maxDiscount?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endDate?: DateTimeFilter;

    @Field(() => BookingListRelationFilter, {nullable:true})
    Booking?: BookingListRelationFilter;
}
