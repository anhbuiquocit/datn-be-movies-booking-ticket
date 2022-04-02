import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShowingCountAggregate } from './showing-count-aggregate.output';
import { ShowingMinAggregate } from './showing-min-aggregate.output';
import { ShowingMaxAggregate } from './showing-max-aggregate.output';

@ObjectType()
export class AggregateShowing {

    @Field(() => ShowingCountAggregate, {nullable:true})
    _count?: ShowingCountAggregate;

    @Field(() => ShowingMinAggregate, {nullable:true})
    _min?: ShowingMinAggregate;

    @Field(() => ShowingMaxAggregate, {nullable:true})
    _max?: ShowingMaxAggregate;
}
