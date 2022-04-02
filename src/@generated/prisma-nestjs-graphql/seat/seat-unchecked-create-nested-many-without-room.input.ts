import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateWithoutRoomInput } from './seat-create-without-room.input';
import { SeatCreateOrConnectWithoutRoomInput } from './seat-create-or-connect-without-room.input';
import { SeatCreateManyRoomInputEnvelope } from './seat-create-many-room-input-envelope.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';

@InputType()
export class SeatUncheckedCreateNestedManyWithoutRoomInput {

    @Field(() => [SeatCreateWithoutRoomInput], {nullable:true})
    create?: Array<SeatCreateWithoutRoomInput>;

    @Field(() => [SeatCreateOrConnectWithoutRoomInput], {nullable:true})
    connectOrCreate?: Array<SeatCreateOrConnectWithoutRoomInput>;

    @Field(() => SeatCreateManyRoomInputEnvelope, {nullable:true})
    createMany?: SeatCreateManyRoomInputEnvelope;

    @Field(() => [SeatWhereUniqueInput], {nullable:true})
    connect?: Array<SeatWhereUniqueInput>;
}
