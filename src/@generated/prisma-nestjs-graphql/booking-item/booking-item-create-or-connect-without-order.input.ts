import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemCreateWithoutOrderInput } from './booking-item-create-without-order.input';

@InputType()
export class BookingItemCreateOrConnectWithoutOrderInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemCreateWithoutOrderInput, {nullable:false})
    create!: BookingItemCreateWithoutOrderInput;
}
