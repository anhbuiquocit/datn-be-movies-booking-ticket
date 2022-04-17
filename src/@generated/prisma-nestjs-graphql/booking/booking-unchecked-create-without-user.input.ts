import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingItemUncheckedCreateNestedManyWithoutBookingInput } from '../booking-item/booking-item-unchecked-create-nested-many-without-booking.input';

@InputType()
export class BookingUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingItemUncheckedCreateNestedManyWithoutBookingInput, {nullable:true})
    bookingItem?: BookingItemUncheckedCreateNestedManyWithoutBookingInput;

    @Field(() => String, {nullable:true})
    PromotionId?: string;

    @Field(() => Boolean, {nullable:true})
    isPayment?: boolean;
}
