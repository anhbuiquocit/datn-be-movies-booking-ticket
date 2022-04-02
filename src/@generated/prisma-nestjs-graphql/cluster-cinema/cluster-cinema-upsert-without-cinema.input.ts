import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClusterCinemaUpdateWithoutCinemaInput } from './cluster-cinema-update-without-cinema.input';
import { ClusterCinemaCreateWithoutCinemaInput } from './cluster-cinema-create-without-cinema.input';

@InputType()
export class ClusterCinemaUpsertWithoutCinemaInput {

    @Field(() => ClusterCinemaUpdateWithoutCinemaInput, {nullable:false})
    update!: ClusterCinemaUpdateWithoutCinemaInput;

    @Field(() => ClusterCinemaCreateWithoutCinemaInput, {nullable:false})
    create!: ClusterCinemaCreateWithoutCinemaInput;
}
