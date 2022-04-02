import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateWithoutRoomInput } from './cinema-create-without-room.input';
import { CinemaCreateOrConnectWithoutRoomInput } from './cinema-create-or-connect-without-room.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';

@InputType()
export class CinemaCreateNestedOneWithoutRoomInput {

    @Field(() => CinemaCreateWithoutRoomInput, {nullable:true})
    create?: CinemaCreateWithoutRoomInput;

    @Field(() => CinemaCreateOrConnectWithoutRoomInput, {nullable:true})
    connectOrCreate?: CinemaCreateOrConnectWithoutRoomInput;

    @Field(() => CinemaWhereUniqueInput, {nullable:true})
    connect?: CinemaWhereUniqueInput;
}
