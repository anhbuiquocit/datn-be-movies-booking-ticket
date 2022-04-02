import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomCreateWithoutSeatInput } from './room-create-without-seat.input';

@InputType()
export class RoomCreateOrConnectWithoutSeatInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomCreateWithoutSeatInput, {nullable:false})
    create!: RoomCreateWithoutSeatInput;
}
