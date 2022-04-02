import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatWhereInput } from './seat-where.input';
import { SeatOrderByWithAggregationInput } from './seat-order-by-with-aggregation.input';
import { SeatScalarFieldEnum } from './seat-scalar-field.enum';
import { SeatScalarWhereWithAggregatesInput } from './seat-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SeatCountAggregateInput } from './seat-count-aggregate.input';
import { SeatMinAggregateInput } from './seat-min-aggregate.input';
import { SeatMaxAggregateInput } from './seat-max-aggregate.input';

@ArgsType()
export class SeatGroupByArgs {

    @Field(() => SeatWhereInput, {nullable:true})
    where?: SeatWhereInput;

    @Field(() => [SeatOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SeatOrderByWithAggregationInput>;

    @Field(() => [SeatScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SeatScalarFieldEnum>;

    @Field(() => SeatScalarWhereWithAggregatesInput, {nullable:true})
    having?: SeatScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SeatCountAggregateInput, {nullable:true})
    _count?: SeatCountAggregateInput;

    @Field(() => SeatMinAggregateInput, {nullable:true})
    _min?: SeatMinAggregateInput;

    @Field(() => SeatMaxAggregateInput, {nullable:true})
    _max?: SeatMaxAggregateInput;
}
