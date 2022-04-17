import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateNestedOneWithoutBookingItemInput } from '../showing/showing-create-nested-one-without-booking-item.input';
import { BookingCreateNestedOneWithoutBookingItemInput } from '../booking/booking-create-nested-one-without-booking-item.input';

@InputType()
export class BookingItemCreateWithoutSeatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => ShowingCreateNestedOneWithoutBookingItemInput, {nullable:false})
    showing!: ShowingCreateNestedOneWithoutBookingItemInput;

    @Field(() => BookingCreateNestedOneWithoutBookingItemInput, {nullable:false})
    Booking!: BookingCreateNestedOneWithoutBookingItemInput;
}
