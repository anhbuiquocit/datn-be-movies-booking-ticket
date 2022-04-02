import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';

@ArgsType()
export class DeleteOneClusterCinemaArgs {

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:false})
    where!: ClusterCinemaWhereUniqueInput;
}
