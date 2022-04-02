import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { OrderUncheckedUpdateManyWithoutBookingItemInput } from '../order/order-unchecked-update-many-without-booking-item.input';
import { BookingUncheckedUpdateManyWithoutBookingItemInput } from '../booking/booking-unchecked-update-many-without-booking-item.input';

@InputType()
export class BookingItemUncheckedUpdateWithoutSeatInput {

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

    @Field(() => OrderUncheckedUpdateManyWithoutBookingItemInput, {nullable:true})
    Order?: OrderUncheckedUpdateManyWithoutBookingItemInput;

    @Field(() => BookingUncheckedUpdateManyWithoutBookingItemInput, {nullable:true})
    Booking?: BookingUncheckedUpdateManyWithoutBookingItemInput;
}
