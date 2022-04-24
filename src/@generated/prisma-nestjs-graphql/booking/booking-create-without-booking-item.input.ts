import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutBookingInput } from '../user/user-create-nested-one-without-booking.input';
import { Int } from '@nestjs/graphql';
import { PromotionCreateNestedOneWithoutBookingInput } from '../promotion/promotion-create-nested-one-without-booking.input';

@InputType()
export class BookingCreateWithoutBookingItemInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutBookingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutBookingInput;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => PromotionCreateNestedOneWithoutBookingInput, {nullable:true})
    promotion?: PromotionCreateNestedOneWithoutBookingInput;

    @Field(() => Boolean, {nullable:true})
    isPayment?: boolean;

    @Field(() => String, {nullable:true})
    lineSeatMatrix?: string;
}
