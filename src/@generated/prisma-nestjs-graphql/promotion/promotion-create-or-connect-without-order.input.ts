import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionCreateWithoutOrderInput } from './promotion-create-without-order.input';

@InputType()
export class PromotionCreateOrConnectWithoutOrderInput {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;

    @Field(() => PromotionCreateWithoutOrderInput, {nullable:false})
    create!: PromotionCreateWithoutOrderInput;
}
