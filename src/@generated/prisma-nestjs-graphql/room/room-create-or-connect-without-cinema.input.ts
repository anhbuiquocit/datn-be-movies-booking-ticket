import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomCreateWithoutCinemaInput } from './room-create-without-cinema.input';

@InputType()
export class RoomCreateOrConnectWithoutCinemaInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomCreateWithoutCinemaInput, {nullable:false})
    create!: RoomCreateWithoutCinemaInput;
}
