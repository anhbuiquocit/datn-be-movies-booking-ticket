import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaWhereInput } from './cluster-cinema-where.input';
import { ClusterCinemaOrderByWithAggregationInput } from './cluster-cinema-order-by-with-aggregation.input';
import { ClusterCinemaScalarFieldEnum } from './cluster-cinema-scalar-field.enum';
import { ClusterCinemaScalarWhereWithAggregatesInput } from './cluster-cinema-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClusterCinemaCountAggregateInput } from './cluster-cinema-count-aggregate.input';
import { ClusterCinemaMinAggregateInput } from './cluster-cinema-min-aggregate.input';
import { ClusterCinemaMaxAggregateInput } from './cluster-cinema-max-aggregate.input';

@ArgsType()
export class ClusterCinemaGroupByArgs {

    @Field(() => ClusterCinemaWhereInput, {nullable:true})
    where?: ClusterCinemaWhereInput;

    @Field(() => [ClusterCinemaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClusterCinemaOrderByWithAggregationInput>;

    @Field(() => [ClusterCinemaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClusterCinemaScalarFieldEnum>;

    @Field(() => ClusterCinemaScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClusterCinemaScalarWhereWithAggregatesInput;

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
