import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderCreateNestedManyWithoutPromotionInput } from '../order/order-create-nested-many-without-promotion.input';

@InputType()
export class PromotionCreateWithoutBookingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    discount!: number;

    @Field(() => Float, {nullable:false})
    maxDiscount!: number;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => OrderCreateNestedManyWithoutPromotionInput, {nullable:true})
    Order?: OrderCreateNestedManyWithoutPromotionInput;
}
