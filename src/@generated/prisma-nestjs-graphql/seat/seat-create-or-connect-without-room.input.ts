import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatCreateWithoutRoomInput } from './seat-create-without-room.input';

@InputType()
export class SeatCreateOrConnectWithoutRoomInput {

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;

    @Field(() => SeatCreateWithoutRoomInput, {nullable:false})
    create!: SeatCreateWithoutRoomInput;
}
