import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaUpdateInput } from './cluster-cinema-update.input';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';

@ArgsType()
export class UpdateOneClusterCinemaArgs {

    @Field(() => ClusterCinemaUpdateInput, {nullable:false})
    data!: ClusterCinemaUpdateInput;

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:false})
    where!: ClusterCinemaWhereUniqueInput;
}
