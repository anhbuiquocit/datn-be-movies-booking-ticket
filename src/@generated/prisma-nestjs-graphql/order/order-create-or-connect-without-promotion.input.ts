import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutPromotionInput } from './order-create-without-promotion.input';

@InputType()
export class OrderCreateOrConnectWithoutPromotionInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutPromotionInput, {nullable:false})
    create!: OrderCreateWithoutPromotionInput;
}
