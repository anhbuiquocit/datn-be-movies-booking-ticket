import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaWhereInput } from './cluster-cinema-where.input';

@ArgsType()
export class DeleteManyClusterCinemaArgs {

    @Field(() => ClusterCinemaWhereInput, {nullable:true})
    where?: ClusterCinemaWhereInput;
}
