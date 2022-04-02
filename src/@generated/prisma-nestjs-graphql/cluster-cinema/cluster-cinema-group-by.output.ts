import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClusterCinemaCountAggregate } from './cluster-cinema-count-aggregate.output';
import { ClusterCinemaMinAggregate } from './cluster-cinema-min-aggregate.output';
import { ClusterCinemaMaxAggregate } from './cluster-cinema-max-aggregate.output';

@ObjectType()
export class ClusterCinemaGroupBy {

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
    phone!: string;

    @Field(() => ClusterCinemaCountAggregate, {nullable:true})
    _count?: ClusterCinemaCountAggregate;

    @Field(() => ClusterCinemaMinAggregate, {nullable:true})
    _min?: ClusterCinemaMinAggregate;

    @Field(() => ClusterCinemaMaxAggregate, {nullable:true})
    _max?: ClusterCinemaMaxAggregate;
}
