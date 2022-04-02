import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaUpdateWithoutClusterCinemaInput } from './cinema-update-without-cluster-cinema.input';

@InputType()
export class CinemaUpdateWithWhereUniqueWithoutClusterCinemaInput {

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;

    @Field(() => CinemaUpdateWithoutClusterCinemaInput, {nullable:false})
    data!: CinemaUpdateWithoutClusterCinemaInput;
}
