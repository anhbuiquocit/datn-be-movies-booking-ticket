import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SeatUncheckedUpdateManyWithoutRoomInput } from '../seat/seat-unchecked-update-many-without-room.input';
import { ShowingUncheckedUpdateManyWithoutRoomInput } from '../showing/showing-unchecked-update-many-without-room.input';

@InputType()
export class RoomUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    CinemaId?: StringFieldUpdateOperationsInput;

    @Field(() => SeatUncheckedUpdateManyWithoutRoomInput, {nullable:true})
    Seat?: SeatUncheckedUpdateManyWithoutRoomInput;

    @Field(() => ShowingUncheckedUpdateManyWithoutRoomInput, {nullable:true})
    Showing?: ShowingUncheckedUpdateManyWithoutRoomInput;
}
