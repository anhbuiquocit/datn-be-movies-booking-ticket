import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutBookingInput } from '../user/user-update-one-required-without-booking.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PromotionUpdateOneWithoutBookingInput } from '../promotion/promotion-update-one-without-booking.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';

@InputType()
export class BookingUpdateWithoutBookingItemInput {

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => PromotionUpdateOneWithoutBookingInput, {nullable:true})
    promotion?: PromotionUpdateOneWithoutBookingInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isPayment?: NullableBoolFieldUpdateOperationsInput;
}
