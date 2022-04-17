import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { RoomUpdateOneRequiredWithoutShowingInput } from '../room/room-update-one-required-without-showing.input';
import { FilmUpdateOneRequiredWithoutShowingInput } from '../film/film-update-one-required-without-showing.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BookingItemUpdateManyWithoutShowingInput } from '../booking-item/booking-item-update-many-without-showing.input';

@InputType()
export class ShowingUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => RoomUpdateOneRequiredWithoutShowingInput, {nullable:true})
    room?: RoomUpdateOneRequiredWithoutShowingInput;

    @Field(() => FilmUpdateOneRequiredWithoutShowingInput, {nullable:true})
    film?: FilmUpdateOneRequiredWithoutShowingInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    startTime?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    endTime?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BookingItemUpdateManyWithoutShowingInput, {nullable:true})
    BookingItem?: BookingItemUpdateManyWithoutShowingInput;
}
