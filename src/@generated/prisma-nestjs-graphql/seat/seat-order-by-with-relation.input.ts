import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoomOrderByWithRelationInput } from '../room/room-order-by-with-relation.input';
import { BookingItemOrderByRelationAggregateInput } from '../booking-item/booking-item-order-by-relation-aggregate.input';

@InputType()
export class SeatOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position?: keyof typeof SortOrder;

    @Field(() => RoomOrderByWithRelationInput, {nullable:true})
    room?: RoomOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    RoomId?: keyof typeof SortOrder;

    @Field(() => BookingItemOrderByRelationAggregateInput, {nullable:true})
    BookingItem?: BookingItemOrderByRelationAggregateInput;
}
