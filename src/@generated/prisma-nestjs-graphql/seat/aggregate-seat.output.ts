import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SeatCountAggregate } from './seat-count-aggregate.output';
import { SeatMinAggregate } from './seat-min-aggregate.output';
import { SeatMaxAggregate } from './seat-max-aggregate.output';

@ObjectType()
export class AggregateSeat {

    @Field(() => SeatCountAggregate, {nullable:true})
    _count?: SeatCountAggregate;

    @Field(() => SeatMinAggregate, {nullable:true})
    _min?: SeatMinAggregate;

    @Field(() => SeatMaxAggregate, {nullable:true})
    _max?: SeatMaxAggregate;
}
