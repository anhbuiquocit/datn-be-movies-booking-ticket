import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderUncheckedCreateNestedManyWithoutPromotionInput } from '../order/order-unchecked-create-nested-many-without-promotion.input';
import { BookingUncheckedCreateNestedManyWithoutPromotionInput } from '../booking/booking-unchecked-create-nested-many-without-promotion.input';

@InputType()
export class PromotionUncheckedCreateInput {

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

    @Field(() => OrderUncheckedCreateNestedManyWithoutPromotionInput, {nullable:true})
    Order?: OrderUncheckedCreateNestedManyWithoutPromotionInput;

    @Field(() => BookingUncheckedCreateNestedManyWithoutPromotionInput, {nullable:true})
    Booking?: BookingUncheckedCreateNestedManyWithoutPromotionInput;
}
