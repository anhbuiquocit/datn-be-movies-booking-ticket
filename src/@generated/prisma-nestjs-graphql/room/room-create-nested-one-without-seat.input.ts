import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutSeatInput } from './room-create-without-seat.input';
import { RoomCreateOrConnectWithoutSeatInput } from './room-create-or-connect-without-seat.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedOneWithoutSeatInput {

    @Field(() => RoomCreateWithoutSeatInput, {nullable:true})
    create?: RoomCreateWithoutSeatInput;

    @Field(() => RoomCreateOrConnectWithoutSeatInput, {nullable:true})
    connectOrCreate?: RoomCreateOrConnectWithoutSeatInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    connect?: RoomWhereUniqueInput;
}
