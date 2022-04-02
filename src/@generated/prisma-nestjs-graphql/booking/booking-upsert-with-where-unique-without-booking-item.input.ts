import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutBookingItemInput } from './booking-update-without-booking-item.input';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutBookingItemInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutBookingItemInput, {nullable:false})
    update!: BookingUpdateWithoutBookingItemInput;

    @Field(() => BookingCreateWithoutBookingItemInput, {nullable:false})
    create!: BookingCreateWithoutBookingItemInput;
}
