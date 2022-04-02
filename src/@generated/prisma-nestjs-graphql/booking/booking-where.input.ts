import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ShowingRelationFilter } from '../showing/showing-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BookingItemRelationFilter } from '../booking-item/booking-item-relation-filter.input';
import { PromotionRelationFilter } from '../promotion/promotion-relation-filter.input';

@InputType()
export class BookingWhereInput {

    @Field(() => [BookingWhereInput], {nullable:true})
    AND?: Array<BookingWhereInput>;

    @Field(() => [BookingWhereInput], {nullable:true})
    OR?: Array<BookingWhereInput>;

    @Field(() => [BookingWhereInput], {nullable:true})
    NOT?: Array<BookingWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    UserId?: StringFilter;

    @Field(() => ShowingRelationFilter, {nullable:true})
    showing?: ShowingRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    ShowingId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => BookingItemRelationFilter, {nullable:true})
    bookingItem?: BookingItemRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    BookingItemId?: StringFilter;

    @Field(() => PromotionRelationFilter, {nullable:true})
    promotion?: PromotionRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    PromotionId?: StringFilter;
}
