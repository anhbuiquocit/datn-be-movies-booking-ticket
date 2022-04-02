import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShowingOrderByRelationAggregateInput } from '../showing/showing-order-by-relation-aggregate.input';

@InputType()
export class FilmOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trailler?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    director?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => ShowingOrderByRelationAggregateInput, {nullable:true})
    Showing?: ShowingOrderByRelationAggregateInput;
}
