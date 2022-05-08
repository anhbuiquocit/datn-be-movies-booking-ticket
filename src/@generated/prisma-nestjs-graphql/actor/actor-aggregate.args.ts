import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorWhereInput } from './actor-where.input';
import { ActorOrderByWithRelationInput } from './actor-order-by-with-relation.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActorCountAggregateInput } from './actor-count-aggregate.input';
import { ActorMinAggregateInput } from './actor-min-aggregate.input';
import { ActorMaxAggregateInput } from './actor-max-aggregate.input';

@ArgsType()
export class ActorAggregateArgs {

    @Field(() => ActorWhereInput, {nullable:true})
    where?: ActorWhereInput;

    @Field(() => [ActorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActorOrderByWithRelationInput>;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    cursor?: ActorWhereUniqueInput;

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
