import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutRoomInput } from './showing-create-without-room.input';
import { ShowingCreateOrConnectWithoutRoomInput } from './showing-create-or-connect-without-room.input';
import { ShowingCreateManyRoomInputEnvelope } from './showing-create-many-room-input-envelope.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@InputType()
export class ShowingCreateNestedManyWithoutRoomInput {

    @Field(() => [ShowingCreateWithoutRoomInput], {nullable:true})
    create?: Array<ShowingCreateWithoutRoomInput>;

    @Field(() => [ShowingCreateOrConnectWithoutRoomInput], {nullable:true})
    connectOrCreate?: Array<ShowingCreateOrConnectWithoutRoomInput>;

    @Field(() => ShowingCreateManyRoomInputEnvelope, {nullable:true})
    createMany?: ShowingCreateManyRoomInputEnvelope;

    @Field(() => [ShowingWhereUniqueInput], {nullable:true})
    connect?: Array<ShowingWhereUniqueInput>;
}
