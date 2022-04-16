import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingItemCreateNestedOneWithoutBookingInput } from '../booking-item/booking-item-create-nested-one-without-booking.input';
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

    @Field(() => BookingItemCreateNestedOneWithoutBookingInput, {nullable:false})
    bookingItem!: BookingItemCreateNestedOneWithoutBookingInput;

    @Field(() => PromotionCreateNestedOneWithoutBookingInput, {nullable:false})
    promotion!: PromotionCreateNestedOneWithoutBookingInput;
}
