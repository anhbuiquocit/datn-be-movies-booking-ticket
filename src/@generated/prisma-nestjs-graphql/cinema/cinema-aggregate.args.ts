import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaWhereInput } from './cinema-where.input';
import { CinemaOrderByWithRelationInput } from './cinema-order-by-with-relation.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CinemaCountAggregateInput } from './cinema-count-aggregate.input';
import { CinemaMinAggregateInput } from './cinema-min-aggregate.input';
import { CinemaMaxAggregateInput } from './cinema-max-aggregate.input';

@ArgsType()
export class CinemaAggregateArgs {

    @Field(() => CinemaWhereInput, {nullable:true})
    where?: CinemaWhereInput;

    @Field(() => [CinemaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CinemaOrderByWithRelationInput>;

    @Field(() => CinemaWhereUniqueInput, {nullable:true})
    cursor?: CinemaWhereUniqueInput;

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
