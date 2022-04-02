import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClusterCinemaCreateWithoutCinemaInput } from './cluster-cinema-create-without-cinema.input';
import { ClusterCinemaCreateOrConnectWithoutCinemaInput } from './cluster-cinema-create-or-connect-without-cinema.input';
import { ClusterCinemaUpsertWithoutCinemaInput } from './cluster-cinema-upsert-without-cinema.input';
import { ClusterCinemaWhereUniqueInput } from './cluster-cinema-where-unique.input';
import { ClusterCinemaUpdateWithoutCinemaInput } from './cluster-cinema-update-without-cinema.input';

@InputType()
export class ClusterCinemaUpdateOneRequiredWithoutCinemaInput {

    @Field(() => ClusterCinemaCreateWithoutCinemaInput, {nullable:true})
    create?: ClusterCinemaCreateWithoutCinemaInput;

    @Field(() => ClusterCinemaCreateOrConnectWithoutCinemaInput, {nullable:true})
    connectOrCreate?: ClusterCinemaCreateOrConnectWithoutCinemaInput;

    @Field(() => ClusterCinemaUpsertWithoutCinemaInput, {nullable:true})
    upsert?: ClusterCinemaUpsertWithoutCinemaInput;

    @Field(() => ClusterCinemaWhereUniqueInput, {nullable:true})
    connect?: ClusterCinemaWhereUniqueInput;

    @Field(() => ClusterCinemaUpdateWithoutCinemaInput, {nullable:true})
    update?: ClusterCinemaUpdateWithoutCinemaInput;
}
