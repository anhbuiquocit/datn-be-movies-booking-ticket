import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaWhereInput } from './cluster-cinema-where.input';
import { ClusterCinemaOrderByWithRelationInput } from './cluster-cinema-order-by-with-relation.input';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClusterCinemaScalarFieldEnum } from './cluster-cinema-scalar-field.enum';

@ArgsType()
export class FindManyClusterCinemaArgs {

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

    @Field(() => [ClusterCinemaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ClusterCinemaScalarFieldEnum>;
}
