import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SeatOrderByWithRelationInput } from '../seat/seat-order-by-with-relation.input';
import { ShowingOrderByWithRelationInput } from '../showing/showing-order-by-with-relation.input';
import { BookingOrderByRelationAggregateInput } from '../booking/booking-order-by-relation-aggregate.input';

@InputType()
export class BookingItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SeatOrderByWithRelationInput, {nullable:true})
    seat?: SeatOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    SeatId?: keyof typeof SortOrder;

    @Field(() => ShowingOrderByWithRelationInput, {nullable:true})
    showing?: ShowingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    ShowingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => BookingOrderByRelationAggregateInput, {nullable:true})
    Booking?: BookingOrderByRelationAggregateInput;
}
