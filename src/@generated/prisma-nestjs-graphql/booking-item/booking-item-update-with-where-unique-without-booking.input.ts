import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutBookingInput } from './booking-item-update-without-booking.input';

@InputType()
export class BookingItemUpdateWithWhereUniqueWithoutBookingInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutBookingInput, {nullable:false})
    data!: BookingItemUpdateWithoutBookingInput;
}
