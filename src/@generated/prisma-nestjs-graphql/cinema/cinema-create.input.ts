import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClusterCinemaCreateNestedOneWithoutCinemaInput } from '../cluster-cinema/cluster-cinema-create-nested-one-without-cinema.input';
import { RoomCreateNestedManyWithoutCinemaInput } from '../room/room-create-nested-many-without-cinema.input';

@InputType()
export class CinemaCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ClusterCinemaCreateNestedOneWithoutCinemaInput, {nullable:false})
    clusterCinema!: ClusterCinemaCreateNestedOneWithoutCinemaInput;

    @Field(() => RoomCreateNestedManyWithoutCinemaInput, {nullable:true})
    Room?: RoomCreateNestedManyWithoutCinemaInput;
}
