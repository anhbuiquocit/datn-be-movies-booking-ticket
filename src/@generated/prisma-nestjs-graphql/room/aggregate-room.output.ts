import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoomCountAggregate } from './room-count-aggregate.output';
import { RoomMinAggregate } from './room-min-aggregate.output';
import { RoomMaxAggregate } from './room-max-aggregate.output';

@ObjectType()
export class AggregateRoom {

    @Field(() => RoomCountAggregate, {nullable:true})
    _count?: RoomCountAggregate;

    @Field(() => RoomMinAggregate, {nullable:true})
    _min?: RoomMinAggregate;

    @Field(() => RoomMaxAggregate, {nullable:true})
    _max?: RoomMaxAggregate;
}
