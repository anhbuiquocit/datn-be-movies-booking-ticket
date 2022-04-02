import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShowingCountAggregate } from './showing-count-aggregate.output';
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

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => ShowingCountAggregate, {nullable:true})
    _count?: ShowingCountAggregate;

    @Field(() => ShowingMinAggregate, {nullable:true})
    _min?: ShowingMinAggregate;

    @Field(() => ShowingMaxAggregate, {nullable:true})
    _max?: ShowingMaxAggregate;
}
