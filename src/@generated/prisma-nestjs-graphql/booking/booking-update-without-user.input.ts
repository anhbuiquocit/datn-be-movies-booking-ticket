import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BookingItemUpdateManyWithoutBookingInput } from '../booking-item/booking-item-update-many-without-booking.input';
import { PromotionUpdateOneWithoutBookingInput } from '../promotion/promotion-update-one-without-booking.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class BookingUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => BookingItemUpdateManyWithoutBookingInput, {nullable:true})
    bookingItem?: BookingItemUpdateManyWithoutBookingInput;

    @Field(() => PromotionUpdateOneWithoutBookingInput, {nullable:true})
    promotion?: PromotionUpdateOneWithoutBookingInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPayment?: NullableBoolFieldUpdateOperationsInput;
}
