import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingItemUncheckedCreateNestedManyWithoutBookingInput } from '../booking-item/booking-item-unchecked-create-nested-many-without-booking.input';

@InputType()
export class BookingUncheckedCreateWithoutPromotionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    UserId!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingItemUncheckedCreateNestedManyWithoutBookingInput, {nullable:true})
    bookingItem?: BookingItemUncheckedCreateNestedManyWithoutBookingInput;

    @Field(() => Boolean, {nullable:true})
    isPayment?: boolean;

    @Field(() => String, {nullable:true})
    lineSeatMatrix?: string;
}
