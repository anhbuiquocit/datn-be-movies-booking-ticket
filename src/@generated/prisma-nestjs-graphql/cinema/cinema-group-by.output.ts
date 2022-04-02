import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CinemaCountAggregate } from './cinema-count-aggregate.output';
import { CinemaMinAggregate } from './cinema-min-aggregate.output';
import { CinemaMaxAggregate } from './cinema-max-aggregate.output';

@ObjectType()
export class CinemaGroupBy {

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
    address!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    ClusterCinemaId!: string;

    @Field(() => CinemaCountAggregate, {nullable:true})
    _count?: CinemaCountAggregate;

    @Field(() => CinemaMinAggregate, {nullable:true})
    _min?: CinemaMinAggregate;

    @Field(() => CinemaMaxAggregate, {nullable:true})
    _max?: CinemaMaxAggregate;
}
