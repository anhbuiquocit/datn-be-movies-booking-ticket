import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateWithoutRoomInput } from './cinema-create-without-room.input';
import { CinemaCreateOrConnectWithoutRoomInput } from './cinema-create-or-connect-without-room.input';
import { CinemaUpsertWithoutRoomInput } from './cinema-upsert-without-room.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaUpdateWithoutRoomInput } from './cinema-update-without-room.input';

@InputType()
export class CinemaUpdateOneRequiredWithoutRoomInput {

    @Field(() => CinemaCreateWithoutRoomInput, {nullable:true})
    create?: CinemaCreateWithoutRoomInput;

    @Field(() => CinemaCreateOrConnectWithoutRoomInput, {nullable:true})
    connectOrCreate?: CinemaCreateOrConnectWithoutRoomInput;

    @Field(() => CinemaUpsertWithoutRoomInput, {nullable:true})
    upsert?: CinemaUpsertWithoutRoomInput;

    @Field(() => CinemaWhereUniqueInput, {nullable:true})
    connect?: CinemaWhereUniqueInput;

    @Field(() => CinemaUpdateWithoutRoomInput, {nullable:true})
    update?: CinemaUpdateWithoutRoomInput;
}
