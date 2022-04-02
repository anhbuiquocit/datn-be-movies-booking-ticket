import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemUpdateWithoutOrderInput } from './booking-item-update-without-order.input';
import { BookingItemCreateWithoutOrderInput } from './booking-item-create-without-order.input';

@InputType()
export class BookingItemUpsertWithoutOrderInput {

    @Field(() => BookingItemUpdateWithoutOrderInput, {nullable:false})
    update!: BookingItemUpdateWithoutOrderInput;

    @Field(() => BookingItemCreateWithoutOrderInput, {nullable:false})
    create!: BookingItemCreateWithoutOrderInput;
}
