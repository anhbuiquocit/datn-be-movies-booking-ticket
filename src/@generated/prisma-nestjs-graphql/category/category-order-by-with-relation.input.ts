import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FilmOrderByRelationAggregateInput } from '../film/film-order-by-relation-aggregate.input';

@InputType()
export class CategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleteAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => FilmOrderByRelationAggregateInput, {nullable:true})
    Film?: FilmOrderByRelationAggregateInput;
}
