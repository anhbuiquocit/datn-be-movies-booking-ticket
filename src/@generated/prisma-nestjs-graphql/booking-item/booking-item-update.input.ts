import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { SeatUpdateOneRequiredWithoutBookingItemInput } from '../seat/seat-update-one-required-without-booking-item.input';
import { ShowingUpdateOneRequiredWithoutBookingItemInput } from '../showing/showing-update-one-required-without-booking-item.input';
import { BookingUpdateOneRequiredWithoutBookingItemInput } from '../booking/booking-update-one-required-without-booking-item.input';

@InputType()
export class BookingItemUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => SeatUpdateOneRequiredWithoutBookingItemInput, {nullable:true})
    seat?: SeatUpdateOneRequiredWithoutBookingItemInput;

    @Field(() => ShowingUpdateOneRequiredWithoutBookingItemInput, {nullable:true})
    showing?: ShowingUpdateOneRequiredWithoutBookingItemInput;

    @Field(() => BookingUpdateOneRequiredWithoutBookingItemInput, {nullable:true})
    Booking?: BookingUpdateOneRequiredWithoutBookingItemInput;
}
