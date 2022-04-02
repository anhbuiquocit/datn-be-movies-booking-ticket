import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';

@InputType()
export class BookingItemCreateOrConnectWithoutBookingInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemCreateWithoutBookingInput, {nullable:false})
    create!: BookingItemCreateWithoutBookingInput;
}
