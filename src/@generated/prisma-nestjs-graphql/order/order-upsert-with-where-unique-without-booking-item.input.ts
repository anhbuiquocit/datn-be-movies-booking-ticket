import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutBookingItemInput } from './order-update-without-booking-item.input';
import { OrderCreateWithoutBookingItemInput } from './order-create-without-booking-item.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutBookingItemInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutBookingItemInput, {nullable:false})
    update!: OrderUpdateWithoutBookingItemInput;

    @Field(() => OrderCreateWithoutBookingItemInput, {nullable:false})
    create!: OrderCreateWithoutBookingItemInput;
}
