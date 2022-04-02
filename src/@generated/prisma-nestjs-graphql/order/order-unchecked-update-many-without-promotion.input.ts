import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPromotionInput } from './order-create-without-promotion.input';
import { OrderCreateOrConnectWithoutPromotionInput } from './order-create-or-connect-without-promotion.input';
import { OrderUpsertWithWhereUniqueWithoutPromotionInput } from './order-upsert-with-where-unique-without-promotion.input';
import { OrderCreateManyPromotionInputEnvelope } from './order-create-many-promotion-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutPromotionInput } from './order-update-with-where-unique-without-promotion.input';
import { OrderUpdateManyWithWhereWithoutPromotionInput } from './order-update-many-with-where-without-promotion.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutPromotionInput {

    @Field(() => [OrderCreateWithoutPromotionInput], {nullable:true})
    create?: Array<OrderCreateWithoutPromotionInput>;

    @Field(() => [OrderCreateOrConnectWithoutPromotionInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutPromotionInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutPromotionInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutPromotionInput>;

    @Field(() => OrderCreateManyPromotionInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyPromotionInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutPromotionInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutPromotionInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutPromotionInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutPromotionInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
