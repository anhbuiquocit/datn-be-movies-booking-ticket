import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateWithoutRoomInput } from './seat-create-without-room.input';
import { SeatCreateOrConnectWithoutRoomInput } from './seat-create-or-connect-without-room.input';
import { SeatUpsertWithWhereUniqueWithoutRoomInput } from './seat-upsert-with-where-unique-without-room.input';
import { SeatCreateManyRoomInputEnvelope } from './seat-create-many-room-input-envelope.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatUpdateWithWhereUniqueWithoutRoomInput } from './seat-update-with-where-unique-without-room.input';
import { SeatUpdateManyWithWhereWithoutRoomInput } from './seat-update-many-with-where-without-room.input';
import { SeatScalarWhereInput } from './seat-scalar-where.input';

@InputType()
export class SeatUncheckedUpdateManyWithoutRoomInput {

    @Field(() => [SeatCreateWithoutRoomInput], {nullable:true})
    create?: Array<SeatCreateWithoutRoomInput>;

    @Field(() => [SeatCreateOrConnectWithoutRoomInput], {nullable:true})
    connectOrCreate?: Array<SeatCreateOrConnectWithoutRoomInput>;

    @Field(() => [SeatUpsertWithWhereUniqueWithoutRoomInput], {nullable:true})
    upsert?: Array<SeatUpsertWithWhereUniqueWithoutRoomInput>;

    @Field(() => SeatCreateManyRoomInputEnvelope, {nullable:true})
    createMany?: SeatCreateManyRoomInputEnvelope;

    @Field(() => [SeatWhereUniqueInput], {nullable:true})
    set?: Array<SeatWhereUniqueInput>;

    @Field(() => [SeatWhereUniqueInput], {nullable:true})
    disconnect?: Array<SeatWhereUniqueInput>;

    @Field(() => [SeatWhereUniqueInput], {nullable:true})
    delete?: Array<SeatWhereUniqueInput>;

    @Field(() => [SeatWhereUniqueInput], {nullable:true})
    connect?: Array<SeatWhereUniqueInput>;

    @Field(() => [SeatUpdateWithWhereUniqueWithoutRoomInput], {nullable:true})
    update?: Array<SeatUpdateWithWhereUniqueWithoutRoomInput>;

    @Field(() => [SeatUpdateManyWithWhereWithoutRoomInput], {nullable:true})
    updateMany?: Array<SeatUpdateManyWithWhereWithoutRoomInput>;

    @Field(() => [SeatScalarWhereInput], {nullable:true})
    deleteMany?: Array<SeatScalarWhereInput>;
}
