import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateWithoutBookingItemInput } from './seat-create-without-booking-item.input';
import { SeatCreateOrConnectWithoutBookingItemInput } from './seat-create-or-connect-without-booking-item.input';
import { SeatUpsertWithoutBookingItemInput } from './seat-upsert-without-booking-item.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatUpdateWithoutBookingItemInput } from './seat-update-without-booking-item.input';

@InputType()
export class SeatUpdateOneRequiredWithoutBookingItemInput {

    @Field(() => SeatCreateWithoutBookingItemInput, {nullable:true})
    create?: SeatCreateWithoutBookingItemInput;

    @Field(() => SeatCreateOrConnectWithoutBookingItemInput, {nullable:true})
    connectOrCreate?: SeatCreateOrConnectWithoutBookingItemInput;

    @Field(() => SeatUpsertWithoutBookingItemInput, {nullable:true})
    upsert?: SeatUpsertWithoutBookingItemInput;

    @Field(() => SeatWhereUniqueInput, {nullable:true})
    connect?: SeatWhereUniqueInput;

    @Field(() => SeatUpdateWithoutBookingItemInput, {nullable:true})
    update?: SeatUpdateWithoutBookingItemInput;
}
