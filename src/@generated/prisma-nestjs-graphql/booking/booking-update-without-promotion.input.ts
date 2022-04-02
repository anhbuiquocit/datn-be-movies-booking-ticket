import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBookingInput } from '../user/user-update-one-required-without-booking.input';
import { ShowingUpdateOneRequiredWithoutBookingInput } from '../showing/showing-update-one-required-without-booking.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BookingItemUpdateOneRequiredWithoutBookingInput } from '../booking-item/booking-item-update-one-required-without-booking.input';

@InputType()
export class BookingUpdateWithoutPromotionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutBookingInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutBookingInput;

    @Field(() => ShowingUpdateOneRequiredWithoutBookingInput, {nullable:true})
    showing?: ShowingUpdateOneRequiredWithoutBookingInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => BookingItemUpdateOneRequiredWithoutBookingInput, {nullable:true})
    bookingItem?: BookingItemUpdateOneRequiredWithoutBookingInput;
}
