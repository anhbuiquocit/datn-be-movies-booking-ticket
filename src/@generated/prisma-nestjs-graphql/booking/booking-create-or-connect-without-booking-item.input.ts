import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';

@InputType()
export class BookingCreateOrConnectWithoutBookingItemInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutBookingItemInput, {nullable:false})
    create!: BookingCreateWithoutBookingItemInput;
}
