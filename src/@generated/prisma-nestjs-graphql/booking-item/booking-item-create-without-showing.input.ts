import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateNestedOneWithoutBookingItemInput } from '../seat/seat-create-nested-one-without-booking-item.input';
import { Int } from '@nestjs/graphql';
import { BookingCreateNestedManyWithoutBookingItemInput } from '../booking/booking-create-nested-many-without-booking-item.input';

@InputType()
export class BookingItemCreateWithoutShowingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => SeatCreateNestedOneWithoutBookingItemInput, {nullable:false})
    seat!: SeatCreateNestedOneWithoutBookingItemInput;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingCreateNestedManyWithoutBookingItemInput, {nullable:true})
    Booking?: BookingCreateNestedManyWithoutBookingItemInput;
}
