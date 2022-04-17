import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';
import { BookingCreateOrConnectWithoutBookingItemInput } from './booking-create-or-connect-without-booking-item.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedOneWithoutBookingItemInput {

    @Field(() => BookingCreateWithoutBookingItemInput, {nullable:true})
    create?: BookingCreateWithoutBookingItemInput;

    @Field(() => BookingCreateOrConnectWithoutBookingItemInput, {nullable:true})
    connectOrCreate?: BookingCreateOrConnectWithoutBookingItemInput;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    connect?: BookingWhereUniqueInput;
}
