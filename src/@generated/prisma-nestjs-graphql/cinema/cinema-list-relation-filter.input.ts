import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaWhereInput } from './cinema-where.input';

@InputType()
export class CinemaListRelationFilter {

    @Field(() => CinemaWhereInput, {nullable:true})
    every?: CinemaWhereInput;

    @Field(() => CinemaWhereInput, {nullable:true})
    some?: CinemaWhereInput;

    @Field(() => CinemaWhereInput, {nullable:true})
    none?: CinemaWhereInput;
}
