import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutBookingItemInput } from './order-update-without-booking-item.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutBookingItemInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutBookingItemInput, {nullable:false})
    data!: OrderUpdateWithoutBookingItemInput;
}
