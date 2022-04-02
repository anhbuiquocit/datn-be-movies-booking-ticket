import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaUpdateManyMutationInput } from './cluster-cinema-update-many-mutation.input';
import { ClusterCinemaWhereInput } from './cluster-cinema-where.input';

@ArgsType()
export class UpdateManyClusterCinemaArgs {

    @Field(() => ClusterCinemaUpdateManyMutationInput, {nullable:false})
    data!: ClusterCinemaUpdateManyMutationInput;

    @Field(() => ClusterCinemaWhereInput, {nullable:true})
    where?: ClusterCinemaWhereInput;
}
