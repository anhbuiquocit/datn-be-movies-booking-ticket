import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SeatCountAggregate } from './seat-count-aggregate.output';
import { SeatMinAggregate } from './seat-min-aggregate.output';
import { SeatMaxAggregate } from './seat-max-aggregate.output';

@ObjectType()
export class SeatGroupBy {

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
    position!: string;

    @Field(() => String, {nullable:false})
    RoomId!: string;

    @Field(() => SeatCountAggregate, {nullable:true})
    _count?: SeatCountAggregate;

    @Field(() => SeatMinAggregate, {nullable:true})
    _min?: SeatMinAggregate;

    @Field(() => SeatMaxAggregate, {nullable:true})
    _max?: SeatMaxAggregate;
}
