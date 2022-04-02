import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { SeatCreateWithoutBookingItemInput } from './seat-create-without-booking-item.input';

@InputType()
export class SeatCreateOrConnectWithoutBookingItemInput {

    @Field(() => SeatWhereUniqueInput, {nullable:false})
    where!: SeatWhereUniqueInput;

    @Field(() => SeatCreateWithoutBookingItemInput, {nullable:false})
    create!: SeatCreateWithoutBookingItemInput;
}
