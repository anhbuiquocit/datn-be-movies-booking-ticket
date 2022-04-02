import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutSeatInput } from './room-create-without-seat.input';
import { RoomCreateOrConnectWithoutSeatInput } from './room-create-or-connect-without-seat.input';
import { RoomUpsertWithoutSeatInput } from './room-upsert-without-seat.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithoutSeatInput } from './room-update-without-seat.input';

@InputType()
export class RoomUpdateOneRequiredWithoutSeatInput {

    @Field(() => RoomCreateWithoutSeatInput, {nullable:true})
    create?: RoomCreateWithoutSeatInput;

    @Field(() => RoomCreateOrConnectWithoutSeatInput, {nullable:true})
    connectOrCreate?: RoomCreateOrConnectWithoutSeatInput;

    @Field(() => RoomUpsertWithoutSeatInput, {nullable:true})
    upsert?: RoomUpsertWithoutSeatInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    connect?: RoomWhereUniqueInput;

    @Field(() => RoomUpdateWithoutSeatInput, {nullable:true})
    update?: RoomUpdateWithoutSeatInput;
}
