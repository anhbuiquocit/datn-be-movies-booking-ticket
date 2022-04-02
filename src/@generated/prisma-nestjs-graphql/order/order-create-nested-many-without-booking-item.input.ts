import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutBookingItemInput } from './order-create-without-booking-item.input';
import { OrderCreateOrConnectWithoutBookingItemInput } from './order-create-or-connect-without-booking-item.input';
import { OrderCreateManyBookingItemInputEnvelope } from './order-create-many-booking-item-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutBookingItemInput {

    @Field(() => [OrderCreateWithoutBookingItemInput], {nullable:true})
    create?: Array<OrderCreateWithoutBookingItemInput>;

    @Field(() => [OrderCreateOrConnectWithoutBookingItemInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutBookingItemInput>;

    @Field(() => OrderCreateManyBookingItemInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyBookingItemInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
