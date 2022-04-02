import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClusterCinemaOrderByWithRelationInput } from '../cluster-cinema/cluster-cinema-order-by-with-relation.input';
import { RoomOrderByRelationAggregateInput } from '../room/room-order-by-relation-aggregate.input';

@InputType()
export class CinemaOrderByWithRelationInput {

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
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => ClusterCinemaOrderByWithRelationInput, {nullable:true})
    clusterCinema?: ClusterCinemaOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    ClusterCinemaId?: keyof typeof SortOrder;

    @Field(() => RoomOrderByRelationAggregateInput, {nullable:true})
    Room?: RoomOrderByRelationAggregateInput;
}
