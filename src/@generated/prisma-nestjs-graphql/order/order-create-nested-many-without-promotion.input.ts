import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPromotionInput } from './order-create-without-promotion.input';
import { OrderCreateOrConnectWithoutPromotionInput } from './order-create-or-connect-without-promotion.input';
import { OrderCreateManyPromotionInputEnvelope } from './order-create-many-promotion-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutPromotionInput {

    @Field(() => [OrderCreateWithoutPromotionInput], {nullable:true})
    create?: Array<OrderCreateWithoutPromotionInput>;

    @Field(() => [OrderCreateOrConnectWithoutPromotionInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutPromotionInput>;

    @Field(() => OrderCreateManyPromotionInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyPromotionInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
