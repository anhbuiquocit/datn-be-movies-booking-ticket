import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutBookingItemInput } from './booking-update-without-booking-item.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutBookingItemInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutBookingItemInput, {nullable:false})
    data!: BookingUpdateWithoutBookingItemInput;
}
