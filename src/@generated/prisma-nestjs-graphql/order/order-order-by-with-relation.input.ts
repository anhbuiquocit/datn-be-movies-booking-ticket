import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ShowingOrderByWithRelationInput } from '../showing/showing-order-by-with-relation.input';
import { BookingItemOrderByWithRelationInput } from '../booking-item/booking-item-order-by-with-relation.input';
import { PromotionOrderByWithRelationInput } from '../promotion/promotion-order-by-with-relation.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    UserId?: keyof typeof SortOrder;

    @Field(() => ShowingOrderByWithRelationInput, {nullable:true})
    showing?: ShowingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    ShowingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => BookingItemOrderByWithRelationInput, {nullable:true})
    bookingItem?: BookingItemOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    BookingItemId?: keyof typeof SortOrder;

    @Field(() => PromotionOrderByWithRelationInput, {nullable:true})
    promotion?: PromotionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    PromotionId?: keyof typeof SortOrder;
}
