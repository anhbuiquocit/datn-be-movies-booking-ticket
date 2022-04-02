import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBookingInput } from '../user/user-create-nested-one-without-booking.input';
import { ShowingCreateNestedOneWithoutBookingInput } from '../showing/showing-create-nested-one-without-booking.input';
import { Int } from '@nestjs/graphql';
import { BookingItemCreateNestedOneWithoutBookingInput } from '../booking-item/booking-item-create-nested-one-without-booking.input';

@InputType()
export class BookingCreateWithoutPromotionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBookingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBookingInput;

    @Field(() => ShowingCreateNestedOneWithoutBookingInput, {nullable:false})
    showing!: ShowingCreateNestedOneWithoutBookingInput;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingItemCreateNestedOneWithoutBookingInput, {nullable:false})
    bookingItem!: BookingItemCreateNestedOneWithoutBookingInput;
}
