import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateWithoutClusterCinemaInput } from './cinema-create-without-cluster-cinema.input';
import { CinemaCreateOrConnectWithoutClusterCinemaInput } from './cinema-create-or-connect-without-cluster-cinema.input';
import { CinemaCreateManyClusterCinemaInputEnvelope } from './cinema-create-many-cluster-cinema-input-envelope.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';

@InputType()
export class CinemaCreateNestedManyWithoutClusterCinemaInput {

    @Field(() => [CinemaCreateWithoutClusterCinemaInput], {nullable:true})
    create?: Array<CinemaCreateWithoutClusterCinemaInput>;

    @Field(() => [CinemaCreateOrConnectWithoutClusterCinemaInput], {nullable:true})
    connectOrCreate?: Array<CinemaCreateOrConnectWithoutClusterCinemaInput>;

    @Field(() => CinemaCreateManyClusterCinemaInputEnvelope, {nullable:true})
    createMany?: CinemaCreateManyClusterCinemaInputEnvelope;

    @Field(() => [CinemaWhereUniqueInput], {nullable:true})
    connect?: Array<CinemaWhereUniqueInput>;
}
