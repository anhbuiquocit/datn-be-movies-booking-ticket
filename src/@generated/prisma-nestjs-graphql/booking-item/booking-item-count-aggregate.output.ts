import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingItemCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    SeatId!: number;

    @Field(() => Int, {nullable:false})
    ShowingId!: number;

    @Field(() => Int, {nullable:false})
    bookingId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
