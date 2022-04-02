import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateWithoutClusterCinemaInput } from './cinema-create-without-cluster-cinema.input';
import { CinemaCreateOrConnectWithoutClusterCinemaInput } from './cinema-create-or-connect-without-cluster-cinema.input';
import { CinemaUpsertWithWhereUniqueWithoutClusterCinemaInput } from './cinema-upsert-with-where-unique-without-cluster-cinema.input';
import { CinemaCreateManyClusterCinemaInputEnvelope } from './cinema-create-many-cluster-cinema-input-envelope.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaUpdateWithWhereUniqueWithoutClusterCinemaInput } from './cinema-update-with-where-unique-without-cluster-cinema.input';
import { CinemaUpdateManyWithWhereWithoutClusterCinemaInput } from './cinema-update-many-with-where-without-cluster-cinema.input';
import { CinemaScalarWhereInput } from './cinema-scalar-where.input';

@InputType()
export class CinemaUncheckedUpdateManyWithoutClusterCinemaInput {

    @Field(() => [CinemaCreateWithoutClusterCinemaInput], {nullable:true})
    create?: Array<CinemaCreateWithoutClusterCinemaInput>;

    @Field(() => [CinemaCreateOrConnectWithoutClusterCinemaInput], {nullable:true})
    connectOrCreate?: Array<CinemaCreateOrConnectWithoutClusterCinemaInput>;

    @Field(() => [CinemaUpsertWithWhereUniqueWithoutClusterCinemaInput], {nullable:true})
    upsert?: Array<CinemaUpsertWithWhereUniqueWithoutClusterCinemaInput>;

    @Field(() => CinemaCreateManyClusterCinemaInputEnvelope, {nullable:true})
    createMany?: CinemaCreateManyClusterCinemaInputEnvelope;

    @Field(() => [CinemaWhereUniqueInput], {nullable:true})
    set?: Array<CinemaWhereUniqueInput>;

    @Field(() => [CinemaWhereUniqueInput], {nullable:true})
    disconnect?: Array<CinemaWhereUniqueInput>;

    @Field(() => [CinemaWhereUniqueInput], {nullable:true})
    delete?: Array<CinemaWhereUniqueInput>;

    @Field(() => [CinemaWhereUniqueInput], {nullable:true})
    connect?: Array<CinemaWhereUniqueInput>;

    @Field(() => [CinemaUpdateWithWhereUniqueWithoutClusterCinemaInput], {nullable:true})
    update?: Array<CinemaUpdateWithWhereUniqueWithoutClusterCinemaInput>;

    @Field(() => [CinemaUpdateManyWithWhereWithoutClusterCinemaInput], {nullable:true})
    updateMany?: Array<CinemaUpdateManyWithWhereWithoutClusterCinemaInput>;

    @Field(() => [CinemaScalarWhereInput], {nullable:true})
    deleteMany?: Array<CinemaScalarWhereInput>;
}
