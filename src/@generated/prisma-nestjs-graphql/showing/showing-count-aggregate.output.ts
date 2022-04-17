import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShowingCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    RoomId!: number;

    @Field(() => Int, {nullable:false})
    FilmId!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    startDate!: number;

    @Field(() => Int, {nullable:false})
    endDate!: number;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
