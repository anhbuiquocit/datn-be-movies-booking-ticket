import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorWhereInput } from './actor-where.input';
import { ActorOrderByWithAggregationInput } from './actor-order-by-with-aggregation.input';
import { ActorScalarFieldEnum } from './actor-scalar-field.enum';
import { ActorScalarWhereWithAggregatesInput } from './actor-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActorCountAggregateInput } from './actor-count-aggregate.input';
import { ActorMinAggregateInput } from './actor-min-aggregate.input';
import { ActorMaxAggregateInput } from './actor-max-aggregate.input';

@ArgsType()
export class ActorGroupByArgs {

    @Field(() => ActorWhereInput, {nullable:true})
    where?: ActorWhereInput;

    @Field(() => [ActorOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActorOrderByWithAggregationInput>;

    @Field(() => [ActorScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ActorScalarFieldEnum>;

    @Field(() => ActorScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActorScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActorCountAggregateInput, {nullable:true})
    _count?: ActorCountAggregateInput;

    @Field(() => ActorMinAggregateInput, {nullable:true})
    _min?: ActorMinAggregateInput;

    @Field(() => ActorMaxAggregateInput, {nullable:true})
    _max?: ActorMaxAggregateInput;
}
