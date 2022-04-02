import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingWhereInput } from './showing-where.input';
import { ShowingOrderByWithRelationInput } from './showing-order-by-with-relation.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShowingCountAggregateInput } from './showing-count-aggregate.input';
import { ShowingMinAggregateInput } from './showing-min-aggregate.input';
import { ShowingMaxAggregateInput } from './showing-max-aggregate.input';

@ArgsType()
export class ShowingAggregateArgs {

    @Field(() => ShowingWhereInput, {nullable:true})
    where?: ShowingWhereInput;

    @Field(() => [ShowingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShowingOrderByWithRelationInput>;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    cursor?: ShowingWhereUniqueInput;

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
