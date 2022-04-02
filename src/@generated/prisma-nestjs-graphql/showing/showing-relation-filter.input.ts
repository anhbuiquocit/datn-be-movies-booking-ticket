import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereInput } from './showing-where.input';

@InputType()
export class ShowingRelationFilter {

    @Field(() => ShowingWhereInput, {nullable:true})
    is?: ShowingWhereInput;

    @Field(() => ShowingWhereInput, {nullable:true})
    isNot?: ShowingWhereInput;
}
