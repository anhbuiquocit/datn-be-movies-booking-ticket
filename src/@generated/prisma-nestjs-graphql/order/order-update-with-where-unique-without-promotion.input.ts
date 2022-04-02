import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutPromotionInput } from './order-update-without-promotion.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutPromotionInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutPromotionInput, {nullable:false})
    data!: OrderUpdateWithoutPromotionInput;
}
