import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutCinemaInput } from './room-create-without-cinema.input';
import { RoomCreateOrConnectWithoutCinemaInput } from './room-create-or-connect-without-cinema.input';
import { RoomCreateManyCinemaInputEnvelope } from './room-create-many-cinema-input-envelope.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedManyWithoutCinemaInput {

    @Field(() => [RoomCreateWithoutCinemaInput], {nullable:true})
    create?: Array<RoomCreateWithoutCinemaInput>;

    @Field(() => [RoomCreateOrConnectWithoutCinemaInput], {nullable:true})
    connectOrCreate?: Array<RoomCreateOrConnectWithoutCinemaInput>;

    @Field(() => RoomCreateManyCinemaInputEnvelope, {nullable:true})
    createMany?: RoomCreateManyCinemaInputEnvelope;

    @Field(() => [RoomWhereUniqueInput], {nullable:true})
    connect?: Array<RoomWhereUniqueInput>;
}
