import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { CinemaCreateWithoutRoomInput } from './cinema-create-without-room.input';

@InputType()
export class CinemaCreateOrConnectWithoutRoomInput {

    @Field(() => CinemaWhereUniqueInput, {nullable:false})
    where!: CinemaWhereUniqueInput;

    @Field(() => CinemaCreateWithoutRoomInput, {nullable:false})
    create!: CinemaCreateWithoutRoomInput;
}
