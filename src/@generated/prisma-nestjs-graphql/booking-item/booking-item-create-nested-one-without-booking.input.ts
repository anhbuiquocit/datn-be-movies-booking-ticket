import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';
import { BookingItemCreateOrConnectWithoutBookingInput } from './booking-item-create-or-connect-without-booking.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@InputType()
export class BookingItemCreateNestedOneWithoutBookingInput {

    @Field(() => BookingItemCreateWithoutBookingInput, {nullable:true})
    create?: BookingItemCreateWithoutBookingInput;

    @Field(() => BookingItemCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput;

    @Field(() => BookingItemWhereUniqueInput, {nullable:true})
    connect?: BookingItemWhereUniqueInput;
}
