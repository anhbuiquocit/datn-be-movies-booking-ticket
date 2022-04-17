import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUpdateWithoutBookingItemInput } from './booking-update-without-booking-item.input';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';

@InputType()
export class BookingUpsertWithoutBookingItemInput {

    @Field(() => BookingUpdateWithoutBookingItemInput, {nullable:false})
    update!: BookingUpdateWithoutBookingItemInput;

    @Field(() => BookingCreateWithoutBookingItemInput, {nullable:false})
    create!: BookingCreateWithoutBookingItemInput;
}
