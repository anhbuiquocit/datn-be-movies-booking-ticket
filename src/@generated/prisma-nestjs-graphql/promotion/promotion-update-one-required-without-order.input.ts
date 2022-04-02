import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateWithoutOrderInput } from './promotion-create-without-order.input';
import { PromotionCreateOrConnectWithoutOrderInput } from './promotion-create-or-connect-without-order.input';
import { PromotionUpsertWithoutOrderInput } from './promotion-upsert-without-order.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionUpdateWithoutOrderInput } from './promotion-update-without-order.input';

@InputType()
export class PromotionUpdateOneRequiredWithoutOrderInput {

    @Field(() => PromotionCreateWithoutOrderInput, {nullable:true})
    create?: PromotionCreateWithoutOrderInput;

    @Field(() => PromotionCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: PromotionCreateOrConnectWithoutOrderInput;

    @Field(() => PromotionUpsertWithoutOrderInput, {nullable:true})
    upsert?: PromotionUpsertWithoutOrderInput;

    @Field(() => PromotionWhereUniqueInput, {nullable:true})
    connect?: PromotionWhereUniqueInput;

    @Field(() => PromotionUpdateWithoutOrderInput, {nullable:true})
    update?: PromotionUpdateWithoutOrderInput;
}
