import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaWhereInput } from './cinema-where.input';
import { CinemaOrderByWithAggregationInput } from './cinema-order-by-with-aggregation.input';
import { CinemaScalarFieldEnum } from './cinema-scalar-field.enum';
import { CinemaScalarWhereWithAggregatesInput } from './cinema-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CinemaCountAggregateInput } from './cinema-count-aggregate.input';
import { CinemaMinAggregateInput } from './cinema-min-aggregate.input';
import { CinemaMaxAggregateInput } from './cinema-max-aggregate.input';

@ArgsType()
export class CinemaGroupByArgs {

    @Field(() => CinemaWhereInput, {nullable:true})
    where?: CinemaWhereInput;

    @Field(() => [CinemaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CinemaOrderByWithAggregationInput>;

    @Field(() => [CinemaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CinemaScalarFieldEnum>;

    @Field(() => CinemaScalarWhereWithAggregatesInput, {nullable:true})
    having?: CinemaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CinemaCountAggregateInput, {nullable:true})
    _count?: CinemaCountAggregateInput;

    @Field(() => CinemaMinAggregateInput, {nullable:true})
    _min?: CinemaMinAggregateInput;

    @Field(() => CinemaMaxAggregateInput, {nullable:true})
    _max?: CinemaMaxAggregateInput;
}
