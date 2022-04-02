import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutOrderInput } from '../user/user-create-nested-one-without-order.input';
import { Int } from '@nestjs/graphql';
import { BookingItemCreateNestedOneWithoutOrderInput } from '../booking-item/booking-item-create-nested-one-without-order.input';
import { PromotionCreateNestedOneWithoutOrderInput } from '../promotion/promotion-create-nested-one-without-order.input';

@InputType()
export class OrderCreateWithoutShowingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutOrderInput, {nullable:false})
    user!: UserCreateNestedOneWithoutOrderInput;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingItemCreateNestedOneWithoutOrderInput, {nullable:false})
    bookingItem!: BookingItemCreateNestedOneWithoutOrderInput;

    @Field(() => PromotionCreateNestedOneWithoutOrderInput, {nullable:false})
    promotion!: PromotionCreateNestedOneWithoutOrderInput;
}
