import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereInput } from './showing-where.input';

@InputType()
export class ShowingListRelationFilter {

    @Field(() => ShowingWhereInput, {nullable:true})
    every?: ShowingWhereInput;

    @Field(() => ShowingWhereInput, {nullable:true})
    some?: ShowingWhereInput;

    @Field(() => ShowingWhereInput, {nullable:true})
    none?: ShowingWhereInput;
}
