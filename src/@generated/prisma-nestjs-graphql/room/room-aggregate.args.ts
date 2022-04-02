import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomWhereInput } from './room-where.input';
import { RoomOrderByWithRelationInput } from './room-order-by-with-relation.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoomCountAggregateInput } from './room-count-aggregate.input';
import { RoomMinAggregateInput } from './room-min-aggregate.input';
import { RoomMaxAggregateInput } from './room-max-aggregate.input';

@ArgsType()
export class RoomAggregateArgs {

    @Field(() => RoomWhereInput, {nullable:true})
    where?: RoomWhereInput;

    @Field(() => [RoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoomOrderByWithRelationInput>;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    cursor?: RoomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoomCountAggregateInput, {nullable:true})
    _count?: RoomCountAggregateInput;

    @Field(() => RoomMinAggregateInput, {nullable:true})
    _min?: RoomMinAggregateInput;

    @Field(() => RoomMaxAggregateInput, {nullable:true})
    _max?: RoomMaxAggregateInput;
}
