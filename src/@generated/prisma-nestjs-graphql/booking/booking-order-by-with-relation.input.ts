import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { BookingItemOrderByRelationAggregateInput } from '../booking-item/booking-item-order-by-relation-aggregate.input';
import { PromotionOrderByWithRelationInput } from '../promotion/promotion-order-by-with-relation.input';

@InputType()
export class BookingOrderByWithRelationInput {

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

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => BookingItemOrderByRelationAggregateInput, {nullable:true})
    bookingItem?: BookingItemOrderByRelationAggregateInput;

    @Field(() => PromotionOrderByWithRelationInput, {nullable:true})
    promotion?: PromotionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    PromotionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isPayment?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lineSeatMatrix?: keyof typeof SortOrder;
}
