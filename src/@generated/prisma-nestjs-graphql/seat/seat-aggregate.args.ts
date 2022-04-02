import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatWhereInput } from './seat-where.input';
import { SeatOrderByWithRelationInput } from './seat-order-by-with-relation.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SeatCountAggregateInput } from './seat-count-aggregate.input';
import { SeatMinAggregateInput } from './seat-min-aggregate.input';
import { SeatMaxAggregateInput } from './seat-max-aggregate.input';

@ArgsType()
export class SeatAggregateArgs {

    @Field(() => SeatWhereInput, {nullable:true})
    where?: SeatWhereInput;

    @Field(() => [SeatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SeatOrderByWithRelationInput>;

    @Field(() => SeatWhereUniqueInput, {nullable:true})
    cursor?: SeatWhereUniqueInput;

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
