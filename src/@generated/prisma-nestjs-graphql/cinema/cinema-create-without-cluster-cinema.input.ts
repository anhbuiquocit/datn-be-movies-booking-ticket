import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateNestedManyWithoutCinemaInput } from '../room/room-create-nested-many-without-cinema.input';

@InputType()
export class CinemaCreateWithoutClusterCinemaInput {

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

    @Field(() => RoomCreateNestedManyWithoutCinemaInput, {nullable:true})
    Room?: RoomCreateNestedManyWithoutCinemaInput;
}
