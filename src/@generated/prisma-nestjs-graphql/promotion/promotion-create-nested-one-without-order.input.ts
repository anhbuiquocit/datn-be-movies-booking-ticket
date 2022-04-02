import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateWithoutOrderInput } from './promotion-create-without-order.input';
import { PromotionCreateOrConnectWithoutOrderInput } from './promotion-create-or-connect-without-order.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';

@InputType()
export class PromotionCreateNestedOneWithoutOrderInput {

    @Field(() => PromotionCreateWithoutOrderInput, {nullable:true})
    create?: PromotionCreateWithoutOrderInput;

    @Field(() => PromotionCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: PromotionCreateOrConnectWithoutOrderInput;

    @Field(() => PromotionWhereUniqueInput, {nullable:true})
    connect?: PromotionWhereUniqueInput;
}
