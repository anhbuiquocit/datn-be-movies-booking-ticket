import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutOrderInput } from './booking-item-create-without-order.input';
import { BookingItemCreateOrConnectWithoutOrderInput } from './booking-item-create-or-connect-without-order.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@InputType()
export class BookingItemCreateNestedOneWithoutOrderInput {

    @Field(() => BookingItemCreateWithoutOrderInput, {nullable:true})
    create?: BookingItemCreateWithoutOrderInput;

    @Field(() => BookingItemCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: BookingItemCreateOrConnectWithoutOrderInput;

    @Field(() => BookingItemWhereUniqueInput, {nullable:true})
    connect?: BookingItemWhereUniqueInput;
}
