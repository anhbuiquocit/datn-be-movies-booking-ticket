import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FilmAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;
}
