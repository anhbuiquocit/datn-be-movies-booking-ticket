import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatUpdateWithoutBookingItemInput } from './seat-update-without-booking-item.input';
import { SeatCreateWithoutBookingItemInput } from './seat-create-without-booking-item.input';

@InputType()
export class SeatUpsertWithoutBookingItemInput {

    @Field(() => SeatUpdateWithoutBookingItemInput, {nullable:false})
    update!: SeatUpdateWithoutBookingItemInput;

    @Field(() => SeatCreateWithoutBookingItemInput, {nullable:false})
    create!: SeatCreateWithoutBookingItemInput;
}
