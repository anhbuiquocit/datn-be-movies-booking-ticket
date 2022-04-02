import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { FilmUpdateOneRequiredWithoutShowingInput } from '../film/film-update-one-required-without-showing.input';
import { OrderUpdateManyWithoutShowingInput } from '../order/order-update-many-without-showing.input';
import { BookingUpdateManyWithoutShowingInput } from '../booking/booking-update-many-without-showing.input';

@InputType()
export class ShowingUpdateWithoutRoomInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => FilmUpdateOneRequiredWithoutShowingInput, {nullable:true})
    film?: FilmUpdateOneRequiredWithoutShowingInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderUpdateManyWithoutShowingInput, {nullable:true})
    Order?: OrderUpdateManyWithoutShowingInput;

    @Field(() => BookingUpdateManyWithoutShowingInput, {nullable:true})
    Booking?: BookingUpdateManyWithoutShowingInput;
}
