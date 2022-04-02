import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PromotionAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    discount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    maxDiscount?: keyof typeof SortOrder;
}
