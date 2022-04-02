import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaCreateInput } from './cluster-cinema-create.input';

@ArgsType()
export class CreateOneClusterCinemaArgs {

    @Field(() => ClusterCinemaCreateInput, {nullable:false})
    data!: ClusterCinemaCreateInput;
}
