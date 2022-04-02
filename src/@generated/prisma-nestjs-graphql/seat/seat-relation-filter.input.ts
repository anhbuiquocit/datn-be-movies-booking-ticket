import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatWhereInput } from './seat-where.input';

@InputType()
export class SeatRelationFilter {

    @Field(() => SeatWhereInput, {nullable:true})
    is?: SeatWhereInput;

    @Field(() => SeatWhereInput, {nullable:true})
    isNot?: SeatWhereInput;
}
