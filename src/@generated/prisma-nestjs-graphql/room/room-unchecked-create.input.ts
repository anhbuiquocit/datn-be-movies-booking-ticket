import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatUncheckedCreateNestedManyWithoutRoomInput } from '../seat/seat-unchecked-create-nested-many-without-room.input';
import { ShowingUncheckedCreateNestedManyWithoutRoomInput } from '../showing/showing-unchecked-create-nested-many-without-room.input';

@InputType()
export class RoomUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    CinemaId!: string;

    @Field(() => SeatUncheckedCreateNestedManyWithoutRoomInput, {nullable:true})
    Seat?: SeatUncheckedCreateNestedManyWithoutRoomInput;

    @Field(() => ShowingUncheckedCreateNestedManyWithoutRoomInput, {nullable:true})
    Showing?: ShowingUncheckedCreateNestedManyWithoutRoomInput;
}
