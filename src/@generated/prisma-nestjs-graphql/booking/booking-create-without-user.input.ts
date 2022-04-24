import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingItemCreateNestedManyWithoutBookingInput } from '../booking-item/booking-item-create-nested-many-without-booking.input';
import { PromotionCreateNestedOneWithoutBookingInput } from '../promotion/promotion-create-nested-one-without-booking.input';

@InputType()
export class BookingCreateWithoutUserInput {

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

    @Field(() => BookingItemCreateNestedManyWithoutBookingInput, {nullable:true})
    bookingItem?: BookingItemCreateNestedManyWithoutBookingInput;

    @Field(() => PromotionCreateNestedOneWithoutBookingInput, {nullable:true})
    promotion?: PromotionCreateNestedOneWithoutBookingInput;

    @Field(() => Boolean, {nullable:true})
    isPayment?: boolean;

    @Field(() => String, {nullable:true})
    lineSeatMatrix?: string;
}
