import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';
import { AdminOrderByWithRelationInput } from './admin-order-by-with-relation.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AdminCountAggregateInput } from './admin-count-aggregate.input';
import { AdminMinAggregateInput } from './admin-min-aggregate.input';
import { AdminMaxAggregateInput } from './admin-max-aggregate.input';

@ArgsType()
export class AdminAggregateArgs {

    @Field(() => AdminWhereInput, {nullable:true})
    where?: AdminWhereInput;

    @Field(() => [AdminOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AdminOrderByWithRelationInput>;

    @Field(() => AdminWhereUniqueInput, {nullable:true})
    cursor?: AdminWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AdminCountAggregateInput, {nullable:true})
    _count?: AdminCountAggregateInput;

    @Field(() => AdminMinAggregateInput, {nullable:true})
    _min?: AdminMinAggregateInput;

    @Field(() => AdminMaxAggregateInput, {nullable:true})
    _max?: AdminMaxAggregateInput;
}
