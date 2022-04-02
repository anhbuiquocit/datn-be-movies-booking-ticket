import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutOrderInput } from './booking-item-create-without-order.input';
import { BookingItemCreateOrConnectWithoutOrderInput } from './booking-item-create-or-connect-without-order.input';
import { BookingItemUpsertWithoutOrderInput } from './booking-item-upsert-without-order.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutOrderInput } from './booking-item-update-without-order.input';

@InputType()
export class BookingItemUpdateOneRequiredWithoutOrderInput {

    @Field(() => BookingItemCreateWithoutOrderInput, {nullable:true})
    create?: BookingItemCreateWithoutOrderInput;

    @Field(() => BookingItemCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: BookingItemCreateOrConnectWithoutOrderInput;

    @Field(() => BookingItemUpsertWithoutOrderInput, {nullable:true})
    upsert?: BookingItemUpsertWithoutOrderInput;

    @Field(() => BookingItemWhereUniqueInput, {nullable:true})
    connect?: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutOrderInput, {nullable:true})
    update?: BookingItemUpdateWithoutOrderInput;
}
