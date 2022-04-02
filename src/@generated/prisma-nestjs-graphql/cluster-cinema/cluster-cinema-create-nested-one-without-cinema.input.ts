import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClusterCinemaCreateWithoutCinemaInput } from './cluster-cinema-create-without-cinema.input';
import { ClusterCinemaCreateOrConnectWithoutCinemaInput } from './cluster-cinema-create-or-connect-without-cinema.input';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';

@InputType()
export class ClusterCinemaCreateNestedOneWithoutCinemaInput {

    @Field(() => ClusterCinemaCreateWithoutCinemaInput, {nullable:true})
    create?: ClusterCinemaCreateWithoutCinemaInput;

    @Field(() => ClusterCinemaCreateOrConnectWithoutCinemaInput, {nullable:true})
    connectOrCreate?: ClusterCinemaCreateOrConnectWithoutCinemaInput;

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:true})
    connect?: ClusterCinemaWhereUniqueInput;
}
