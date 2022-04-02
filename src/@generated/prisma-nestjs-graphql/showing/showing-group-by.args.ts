import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingWhereInput } from './showing-where.input';
import { ShowingOrderByWithAggregationInput } from './showing-order-by-with-aggregation.input';
import { ShowingScalarFieldEnum } from './showing-scalar-field.enum';
import { ShowingScalarWhereWithAggregatesInput } from './showing-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShowingCountAggregateInput } from './showing-count-aggregate.input';
import { ShowingMinAggregateInput } from './showing-min-aggregate.input';
import { ShowingMaxAggregateInput } from './showing-max-aggregate.input';

@ArgsType()
export class ShowingGroupByArgs {

    @Field(() => ShowingWhereInput, {nullable:true})
    where?: ShowingWhereInput;

    @Field(() => [ShowingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShowingOrderByWithAggregationInput>;

    @Field(() => [ShowingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShowingScalarFieldEnum>;

    @Field(() => ShowingScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShowingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShowingCountAggregateInput, {nullable:true})
    _count?: ShowingCountAggregateInput;

    @Field(() => ShowingMinAggregateInput, {nullable:true})
    _min?: ShowingMinAggregateInput;

    @Field(() => ShowingMaxAggregateInput, {nullable:true})
    _max?: ShowingMaxAggregateInput;
}
