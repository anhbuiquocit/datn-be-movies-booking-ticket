import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatWhereInput } from './seat-where.input';

@InputType()
export class SeatListRelationFilter {

    @Field(() => SeatWhereInput, {nullable:true})
    every?: SeatWhereInput;

    @Field(() => SeatWhereInput, {nullable:true})
    some?: SeatWhereInput;

    @Field(() => SeatWhereInput, {nullable:true})
    none?: SeatWhereInput;
}
