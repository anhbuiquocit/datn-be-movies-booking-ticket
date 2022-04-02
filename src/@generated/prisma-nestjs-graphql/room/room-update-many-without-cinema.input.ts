import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutCinemaInput } from './room-create-without-cinema.input';
import { RoomCreateOrConnectWithoutCinemaInput } from './room-create-or-connect-without-cinema.input';
import { RoomUpsertWithWhereUniqueWithoutCinemaInput } from './room-upsert-with-where-unique-without-cinema.input';
import { RoomCreateManyCinemaInputEnvelope } from './room-create-many-cinema-input-envelope.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithWhereUniqueWithoutCinemaInput } from './room-update-with-where-unique-without-cinema.input';
import { RoomUpdateManyWithWhereWithoutCinemaInput } from './room-update-many-with-where-without-cinema.input';
import { RoomScalarWhereInput } from './room-scalar-where.input';

@InputType()
export class RoomUpdateManyWithoutCinemaInput {

    @Field(() => [RoomCreateWithoutCinemaInput], {nullable:true})
    create?: Array<RoomCreateWithoutCinemaInput>;

    @Field(() => [RoomCreateOrConnectWithoutCinemaInput], {nullable:true})
    connectOrCreate?: Array<RoomCreateOrConnectWithoutCinemaInput>;

    @Field(() => [RoomUpsertWithWhereUniqueWithoutCinemaInput], {nullable:true})
    upsert?: Array<RoomUpsertWithWhereUniqueWithoutCinemaInput>;

    @Field(() => RoomCreateManyCinemaInputEnvelope, {nullable:true})
    createMany?: RoomCreateManyCinemaInputEnvelope;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    set?: Array<RoomWhereUniqueInput>;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoomWhereUniqueInput>;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    delete?: Array<RoomWhereUniqueInput>;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    connect?: Array<RoomWhereUniqueInput>;

    @Field(() => [RoomUpdateWithWhereUniqueWithoutCinemaInput], {nullable:true})
    update?: Array<RoomUpdateWithWhereUniqueWithoutCinemaInput>;

    @Field(() => [RoomUpdateManyWithWhereWithoutCinemaInput], {nullable:true})
    updateMany?: Array<RoomUpdateManyWithWhereWithoutCinemaInput>;

    @Field(() => [RoomScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoomScalarWhereInput>;
}
