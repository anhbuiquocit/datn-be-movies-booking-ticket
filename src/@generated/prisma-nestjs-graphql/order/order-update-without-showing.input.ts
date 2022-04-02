import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutOrderInput } from '../user/user-update-one-required-without-order.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BookingItemUpdateOneRequiredWithoutOrderInput } from '../booking-item/booking-item-update-one-required-without-order.input';
import { PromotionUpdateOneRequiredWithoutOrderInput } from '../promotion/promotion-update-one-required-without-order.input';

@InputType()
export class OrderUpdateWithoutShowingInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutOrderInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutOrderInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => BookingItemUpdateOneRequiredWithoutOrderInput, {nullable:true})
    bookingItem?: BookingItemUpdateOneRequiredWithoutOrderInput;

    @Field(() => PromotionUpdateOneRequiredWithoutOrderInput, {nullable:true})
    promotion?: PromotionUpdateOneRequiredWithoutOrderInput;
}
