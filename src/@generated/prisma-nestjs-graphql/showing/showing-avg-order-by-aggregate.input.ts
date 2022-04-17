import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShowingAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;
}
