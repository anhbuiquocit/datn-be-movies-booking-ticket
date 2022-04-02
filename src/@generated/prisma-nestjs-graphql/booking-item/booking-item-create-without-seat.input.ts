import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderCreateNestedManyWithoutBookingItemInput } from '../order/order-create-nested-many-without-booking-item.input';
import { BookingCreateNestedManyWithoutBookingItemInput } from '../booking/booking-create-nested-many-without-booking-item.input';

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

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => OrderCreateNestedManyWithoutBookingItemInput, {nullable:true})
    Order?: OrderCreateNestedManyWithoutBookingItemInput;

    @Field(() => BookingCreateNestedManyWithoutBookingItemInput, {nullable:true})
    Booking?: BookingCreateNestedManyWithoutBookingItemInput;
}
