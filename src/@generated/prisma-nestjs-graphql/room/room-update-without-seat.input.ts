import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { CinemaUpdateOneRequiredWithoutRoomInput } from '../cinema/cinema-update-one-required-without-room.input';
import { ShowingUpdateManyWithoutRoomInput } from '../showing/showing-update-many-without-room.input';

@InputType()
export class RoomUpdateWithoutSeatInput {

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

    @Field(() => CinemaUpdateOneRequiredWithoutRoomInput, {nullable:true})
    cinema?: CinemaUpdateOneRequiredWithoutRoomInput;

    @Field(() => ShowingUpdateManyWithoutRoomInput, {nullable:true})
    Showing?: ShowingUpdateManyWithoutRoomInput;
}
