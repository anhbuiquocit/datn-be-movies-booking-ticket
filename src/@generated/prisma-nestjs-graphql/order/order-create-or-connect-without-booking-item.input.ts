import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutBookingItemInput } from './order-create-without-booking-item.input';

@InputType()
export class OrderCreateOrConnectWithoutBookingItemInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutBookingItemInput, {nullable:false})
    create!: OrderCreateWithoutBookingItemInput;
}
