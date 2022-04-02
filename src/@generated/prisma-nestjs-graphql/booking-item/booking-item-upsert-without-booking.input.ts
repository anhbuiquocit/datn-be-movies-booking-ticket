import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemUpdateWithoutBookingInput } from './booking-item-update-without-booking.input';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';

@InputType()
export class BookingItemUpsertWithoutBookingInput {

    @Field(() => BookingItemUpdateWithoutBookingInput, {nullable:false})
    update!: BookingItemUpdateWithoutBookingInput;

    @Field(() => BookingItemCreateWithoutBookingInput, {nullable:false})
    create!: BookingItemCreateWithoutBookingInput;
}
