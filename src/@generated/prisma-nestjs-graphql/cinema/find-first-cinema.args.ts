import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CinemaWhereInput } from './cinema-where.input';
import { CinemaOrderByWithRelationInput } from './cinema-order-by-with-relation.input';
import { CinemaWhereUniqueInput } from './cinema-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CinemaScalarFieldEnum } from './cinema-scalar-field.enum';

@ArgsType()
export class FindFirstCinemaArgs {

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

    @Field(() => [CinemaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CinemaScalarFieldEnum>;
}
