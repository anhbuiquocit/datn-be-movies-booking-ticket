import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';
import { ClusterCinemaCreateInput } from './cluster-cinema-create.input';
import { ClusterCinemaUpdateInput } from './cluster-cinema-update.input';

@ArgsType()
export class UpsertOneClusterCinemaArgs {

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:false})
    where!: ClusterCinemaWhereUniqueInput;

    @Field(() => ClusterCinemaCreateInput, {nullable:false})
    create!: ClusterCinemaCreateInput;

    @Field(() => ClusterCinemaUpdateInput, {nullable:false})
    update!: ClusterCinemaUpdateInput;
}
