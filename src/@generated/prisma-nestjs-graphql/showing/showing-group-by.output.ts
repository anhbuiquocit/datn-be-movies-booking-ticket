import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShowingCountAggregate } from './showing-count-aggregate.output';
import { ShowingAvgAggregate } from './showing-avg-aggregate.output';
import { ShowingSumAggregate } from './showing-sum-aggregate.output';
import { ShowingMinAggregate } from './showing-min-aggregate.output';
import { ShowingMaxAggregate } from './showing-max-aggregate.output';

@ObjectType()
export class ShowingGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    RoomId!: string;

    @Field(() => String, {nullable:false})
    FilmId!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

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
