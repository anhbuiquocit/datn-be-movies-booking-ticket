import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';
import { BookingItemCreateOrConnectWithoutBookingInput } from './booking-item-create-or-connect-without-booking.input';
import { BookingItemUpsertWithoutBookingInput } from './booking-item-upsert-without-booking.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutBookingInput } from './booking-item-update-without-booking.input';

@InputType()
export class BookingItemUpdateOneRequiredWithoutBookingInput {

    @Field(() => BookingItemCreateWithoutBookingInput, {nullable:true})
    create?: BookingItemCreateWithoutBookingInput;

    @Field(() => BookingItemCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: BookingItemCreateOrConnectWithoutBookingInput;

    @Field(() => BookingItemUpsertWithoutBookingInput, {nullable:true})
    upsert?: BookingItemUpsertWithoutBookingInput;

    @Field(() => BookingItemWhereUniqueInput, {nullable:true})
    connect?: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutBookingInput, {nullable:true})
    update?: BookingItemUpdateWithoutBookingInput;
}
