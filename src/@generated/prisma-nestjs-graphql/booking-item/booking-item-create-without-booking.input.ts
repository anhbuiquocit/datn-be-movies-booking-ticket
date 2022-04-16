import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateNestedOneWithoutBookingItemInput } from '../seat/seat-create-nested-one-without-booking-item.input';
import { ShowingCreateNestedOneWithoutBookingItemInput } from '../showing/showing-create-nested-one-without-booking-item.input';
import { Int } from '@nestjs/graphql';

@InputType()
export class BookingItemCreateWithoutBookingInput {

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

    @Field(() => ShowingCreateNestedOneWithoutBookingItemInput, {nullable:false})
    showing!: ShowingCreateNestedOneWithoutBookingItemInput;

    @Field(() => Int, {nullable:false})
    price!: number;
}
