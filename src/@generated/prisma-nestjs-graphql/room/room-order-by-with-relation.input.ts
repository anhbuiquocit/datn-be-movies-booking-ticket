import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CinemaOrderByWithRelationInput } from '../cinema/cinema-order-by-with-relation.input';
import { SeatOrderByRelationAggregateInput } from '../seat/seat-order-by-relation-aggregate.input';
import { ShowingOrderByRelationAggregateInput } from '../showing/showing-order-by-relation-aggregate.input';

@InputType()
export class RoomOrderByWithRelationInput {

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

    @Field(() => CinemaOrderByWithRelationInput, {nullable:true})
    cinema?: CinemaOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    CinemaId?: keyof typeof SortOrder;

    @Field(() => SeatOrderByRelationAggregateInput, {nullable:true})
    Seat?: SeatOrderByRelationAggregateInput;

    @Field(() => ShowingOrderByRelationAggregateInput, {nullable:true})
    Showing?: ShowingOrderByRelationAggregateInput;
}
