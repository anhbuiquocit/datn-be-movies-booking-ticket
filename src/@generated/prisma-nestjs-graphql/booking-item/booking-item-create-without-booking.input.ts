import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatCreateNestedOneWithoutBookingItemInput } from '../seat/seat-create-nested-one-without-booking-item.input';
import { Int } from '@nestjs/graphql';
import { OrderCreateNestedManyWithoutBookingItemInput } from '../order/order-create-nested-many-without-booking-item.input';

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

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => OrderCreateNestedManyWithoutBookingItemInput, {nullable:true})
    Order?: OrderCreateNestedManyWithoutBookingItemInput;
}
