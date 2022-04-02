import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { OrderUncheckedUpdateManyWithoutShowingInput } from '../order/order-unchecked-update-many-without-showing.input';
import { BookingUncheckedUpdateManyWithoutShowingInput } from '../booking/booking-unchecked-update-many-without-showing.input';

@InputType()
export class ShowingUncheckedUpdateWithoutRoomInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    FilmId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => OrderUncheckedUpdateManyWithoutShowingInput, {nullable:true})
    Order?: OrderUncheckedUpdateManyWithoutShowingInput;

    @Field(() => BookingUncheckedUpdateManyWithoutShowingInput, {nullable:true})
    Booking?: BookingUncheckedUpdateManyWithoutShowingInput;
}
