import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutRoomInput } from './showing-create-without-room.input';
import { ShowingCreateOrConnectWithoutRoomInput } from './showing-create-or-connect-without-room.input';
import { ShowingUpsertWithWhereUniqueWithoutRoomInput } from './showing-upsert-with-where-unique-without-room.input';
import { ShowingCreateManyRoomInputEnvelope } from './showing-create-many-room-input-envelope.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithWhereUniqueWithoutRoomInput } from './showing-update-with-where-unique-without-room.input';
import { ShowingUpdateManyWithWhereWithoutRoomInput } from './showing-update-many-with-where-without-room.input';
import { ShowingScalarWhereInput } from './showing-scalar-where.input';

@InputType()
export class ShowingUpdateManyWithoutRoomInput {

    @Field(() => [ShowingCreateWithoutRoomInput], {nullable:true})
    create?: Array<ShowingCreateWithoutRoomInput>;

    @Field(() => [ShowingCreateOrConnectWithoutRoomInput], {nullable:true})
    connectOrCreate?: Array<ShowingCreateOrConnectWithoutRoomInput>;

    @Field(() => [ShowingUpsertWithWhereUniqueWithoutRoomInput], {nullable:true})
    upsert?: Array<ShowingUpsertWithWhereUniqueWithoutRoomInput>;

    @Field(() => ShowingCreateManyRoomInputEnvelope, {nullable:true})
    createMany?: ShowingCreateManyRoomInputEnvelope;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    set?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    disconnect?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    delete?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    connect?: Array<ShowingWhereUniqueInput>;

    @Field(() => [ShowingUpdateWithWhereUniqueWithoutRoomInput], {nullable:true})
    update?: Array<ShowingUpdateWithWhereUniqueWithoutRoomInput>;

    @Field(() => [ShowingUpdateManyWithWhereWithoutRoomInput], {nullable:true})
    updateMany?: Array<ShowingUpdateManyWithWhereWithoutRoomInput>;

    @Field(() => [ShowingScalarWhereInput], {nullable:true})
    deleteMany?: Array<ShowingScalarWhereInput>;
}
