import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutPromotionInput } from './order-update-without-promotion.input';
import { OrderCreateWithoutPromotionInput } from './order-create-without-promotion.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutPromotionInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutPromotionInput, {nullable:false})
    update!: OrderUpdateWithoutPromotionInput;

    @Field(() => OrderCreateWithoutPromotionInput, {nullable:false})
    create!: OrderCreateWithoutPromotionInput;
}
