import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereInput } from './promotion-where.input';

@InputType()
export class PromotionRelationFilter {

    @Field(() => PromotionWhereInput, {nullable:true})
    is?: PromotionWhereInput;

    @Field(() => PromotionWhereInput, {nullable:true})
    isNot?: PromotionWhereInput;
}
