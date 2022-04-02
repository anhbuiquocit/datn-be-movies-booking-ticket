import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaUpdateWithoutClusterCinemaInput } from './cinema-update-without-cluster-cinema.input';
import { CinemaCreateWithoutClusterCinemaInput } from './cinema-create-without-cluster-cinema.input';

@InputType()
export class CinemaUpsertWithWhereUniqueWithoutClusterCinemaInput {

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;

    @Field(() => CinemaUpdateWithoutClusterCinemaInput, {nullable:false})
    update!: CinemaUpdateWithoutClusterCinemaInput;

    @Field(() => CinemaCreateWithoutClusterCinemaInput, {nullable:false})
    create!: CinemaCreateWithoutClusterCinemaInput;
}
