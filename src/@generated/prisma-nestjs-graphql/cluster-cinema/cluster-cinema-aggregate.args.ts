import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaWhereInput } from './cluster-cinema-where.input';
import { ClusterCinemaOrderByWithRelationInput } from './cluster-cinema-order-by-with-relation.input';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClusterCinemaCountAggregateInput } from './cluster-cinema-count-aggregate.input';
import { ClusterCinemaMinAggregateInput } from './cluster-cinema-min-aggregate.input';
import { ClusterCinemaMaxAggregateInput } from './cluster-cinema-max-aggregate.input';

@ArgsType()
export class ClusterCinemaAggregateArgs {

    @Field(() => ClusterCinemaWhereInput, {nullable:true})
    where?: ClusterCinemaWhereInput;

    @Field(() => [ClusterCinemaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClusterCinemaOrderByWithRelationInput>;

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:true})
    cursor?: ClusterCinemaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClusterCinemaCountAggregateInput, {nullable:true})
    _count?: ClusterCinemaCountAggregateInput;

    @Field(() => ClusterCinemaMinAggregateInput, {nullable:true})
    _min?: ClusterCinemaMinAggregateInput;

    @Field(() => ClusterCinemaMaxAggregateInput, {nullable:true})
    _max?: ClusterCinemaMaxAggregateInput;
}
