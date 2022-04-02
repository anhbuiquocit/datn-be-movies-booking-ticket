import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoomCountAggregate } from './room-count-aggregate.output';
import { RoomMinAggregate } from './room-min-aggregate.output';
import { RoomMaxAggregate } from './room-max-aggregate.output';

@ObjectType()
export class RoomGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    CinemaId!: string;

    @Field(() => RoomCountAggregate, {nullable:true})
    _count?: RoomCountAggregate;

    @Field(() => RoomMinAggregate, {nullable:true})
    _min?: RoomMinAggregate;

    @Field(() => RoomMaxAggregate, {nullable:true})
    _max?: RoomMaxAggregate;
}
