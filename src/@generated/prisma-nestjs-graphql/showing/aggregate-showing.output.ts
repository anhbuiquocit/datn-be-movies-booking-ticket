import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShowingCountAggregate } from './showing-count-aggregate.output';
import { ShowingAvgAggregate } from './showing-avg-aggregate.output';
import { ShowingSumAggregate } from './showing-sum-aggregate.output';
import { ShowingMinAggregate } from './showing-min-aggregate.output';
import { ShowingMaxAggregate } from './showing-max-aggregate.output';

@ObjectType()
export class AggregateShowing {

    @Field(() => ShowingCountAggregate, {nullable:true})
    _count?: ShowingCountAggregate;

    @Field(() => ShowingAvgAggregate, {nullable:true})
    _avg?: ShowingAvgAggregate;

    @Field(() => ShowingSumAggregate, {nullable:true})
    _sum?: ShowingSumAggregate;

    @Field(() => ShowingMinAggregate, {nullable:true})
    _min?: ShowingMinAggregate;

    @Field(() => ShowingMaxAggregate, {nullable:true})
    _max?: ShowingMaxAggregate;
}
