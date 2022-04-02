import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutBookingItemInput } from './order-create-without-booking-item.input';
import { OrderCreateOrConnectWithoutBookingItemInput } from './order-create-or-connect-without-booking-item.input';
import { OrderUpsertWithWhereUniqueWithoutBookingItemInput } from './order-upsert-with-where-unique-without-booking-item.input';
import { OrderCreateManyBookingItemInputEnvelope } from './order-create-many-booking-item-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutBookingItemInput } from './order-update-with-where-unique-without-booking-item.input';
import { OrderUpdateManyWithWhereWithoutBookingItemInput } from './order-update-many-with-where-without-booking-item.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutBookingItemInput {

    @Field(() => [OrderCreateWithoutBookingItemInput], {nullable:true})
    create?: Array<OrderCreateWithoutBookingItemInput>;

    @Field(() => [OrderCreateOrConnectWithoutBookingItemInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutBookingItemInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutBookingItemInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutBookingItemInput>;

    @Field(() => OrderCreateManyBookingItemInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyBookingItemInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutBookingItemInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutBookingItemInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutBookingItemInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutBookingItemInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
