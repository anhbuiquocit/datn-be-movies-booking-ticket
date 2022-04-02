import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateWithoutBookingItemInput } from './seat-create-without-booking-item.input';
import { SeatCreateOrConnectWithoutBookingItemInput } from './seat-create-or-connect-without-booking-item.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';

@InputType()
export class SeatCreateNestedOneWithoutBookingItemInput {

    @Field(() => SeatCreateWithoutBookingItemInput, {nullable:true})
    create?: SeatCreateWithoutBookingItemInput;

    @Field(() => SeatCreateOrConnectWithoutBookingItemInput, {nullable:true})
    connectOrCreate?: SeatCreateOrConnectWithoutBookingItemInput;

    @Field(() => SeatWhereUniqueInput, {nullable:true})
    connect?: SeatWhereUniqueInput;
}
