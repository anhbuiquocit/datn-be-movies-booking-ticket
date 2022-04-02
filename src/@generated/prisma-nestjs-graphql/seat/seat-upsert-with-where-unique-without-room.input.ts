import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatUpdateWithoutRoomInput } from './seat-update-without-room.input';
import { SeatCreateWithoutRoomInput } from './seat-create-without-room.input';

@InputType()
export class SeatUpsertWithWhereUniqueWithoutRoomInput {

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;

    @Field(() => SeatUpdateWithoutRoomInput, {nullable:false})
    update!: SeatUpdateWithoutRoomInput;

    @Field(() => SeatCreateWithoutRoomInput, {nullable:false})
    create!: SeatCreateWithoutRoomInput;
}
