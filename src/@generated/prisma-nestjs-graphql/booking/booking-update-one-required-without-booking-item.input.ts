import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';
import { BookingCreateOrConnectWithoutBookingItemInput } from './booking-create-or-connect-without-booking-item.input';
import { BookingUpsertWithoutBookingItemInput } from './booking-upsert-without-booking-item.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutBookingItemInput } from './booking-update-without-booking-item.input';

@InputType()
export class BookingUpdateOneRequiredWithoutBookingItemInput {

    @Field(() => BookingCreateWithoutBookingItemInput, {nullable:true})
    create?: BookingCreateWithoutBookingItemInput;

    @Field(() => BookingCreateOrConnectWithoutBookingItemInput, {nullable:true})
    connectOrCreate?: BookingCreateOrConnectWithoutBookingItemInput;

    @Field(() => BookingUpsertWithoutBookingItemInput, {nullable:true})
    upsert?: BookingUpsertWithoutBookingItemInput;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    connect?: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutBookingItemInput, {nullable:true})
    update?: BookingUpdateWithoutBookingItemInput;
}
