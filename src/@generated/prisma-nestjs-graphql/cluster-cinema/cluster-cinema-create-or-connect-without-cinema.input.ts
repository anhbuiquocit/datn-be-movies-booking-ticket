import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';
import { ClusterCinemaCreateWithoutCinemaInput } from './cluster-cinema-create-without-cinema.input';

@InputType()
export class ClusterCinemaCreateOrConnectWithoutCinemaInput {

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:false})
    where!: ClusterCinemaWhereUniqueInput;

    @Field(() => ClusterCinemaCreateWithoutCinemaInput, {nullable:false})
    create!: ClusterCinemaCreateWithoutCinemaInput;
}
