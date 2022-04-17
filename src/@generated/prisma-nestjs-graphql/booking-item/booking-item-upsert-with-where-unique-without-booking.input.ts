import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutBookingInput } from './booking-item-update-without-booking.input';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';

@InputType()
export class BookingItemUpsertWithWhereUniqueWithoutBookingInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutBookingInput, {nullable:false})
    update!: BookingItemUpdateWithoutBookingInput;

    @Field(() => BookingItemCreateWithoutBookingInput, {nullable:false})
    create!: BookingItemCreateWithoutBookingInput;
}
