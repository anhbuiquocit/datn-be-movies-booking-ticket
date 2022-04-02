import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingWhereInput } from './showing-where.input';
import { ShowingOrderByWithRelationInput } from './showing-order-by-with-relation.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShowingScalarFieldEnum } from './showing-scalar-field.enum';

@ArgsType()
export class FindManyShowingArgs {

    @Field(() => ShowingWhereInput, {nullable:true})
    where?: ShowingWhereInput;

    @Field(() => [ShowingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShowingOrderByWithRelationInput>;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    cursor?: ShowingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShowingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShowingScalarFieldEnum>;
}
