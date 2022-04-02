import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatUpdateWithoutRoomInput } from './seat-update-without-room.input';

@InputType()
export class SeatUpdateWithWhereUniqueWithoutRoomInput {

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;

    @Field(() => SeatUpdateWithoutRoomInput, {nullable:false})
    data!: SeatUpdateWithoutRoomInput;
}
