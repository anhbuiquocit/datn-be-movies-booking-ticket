import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SeatWhereInput } from './seat-where.input';
import { SeatOrderByWithRelationInput } from './seat-order-by-with-relation.input';
import { SeatWhereUniqueInput } from './seat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SeatScalarFieldEnum } from './seat-scalar-field.enum';

@ArgsType()
export class FindFirstSeatArgs {

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

    @Field(() => [SeatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SeatScalarFieldEnum>;
}
