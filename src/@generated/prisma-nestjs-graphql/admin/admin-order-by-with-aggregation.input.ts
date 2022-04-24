import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AdminCountOrderByAggregateInput } from './admin-count-order-by-aggregate.input';
import { AdminMaxOrderByAggregateInput } from './admin-max-order-by-aggregate.input';
import { AdminMinOrderByAggregateInput } from './admin-min-order-by-aggregate.input';

@InputType()
export class AdminOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updateAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleteAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    birthday?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => AdminCountOrderByAggregateInput, {nullable:true})
    _count?: AdminCountOrderByAggregateInput;

    @Field(() => AdminMaxOrderByAggregateInput, {nullable:true})
    _max?: AdminMaxOrderByAggregateInput;

    @Field(() => AdminMinOrderByAggregateInput, {nullable:true})
    _min?: AdminMinOrderByAggregateInput;
}
