import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaCreateWithoutClusterCinemaInput } from './cinema-create-without-cluster-cinema.input';

@InputType()
export class CinemaCreateOrConnectWithoutClusterCinemaInput {

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;

    @Field(() => CinemaCreateWithoutClusterCinemaInput, {nullable:false})
    create!: CinemaCreateWithoutClusterCinemaInput;
}
