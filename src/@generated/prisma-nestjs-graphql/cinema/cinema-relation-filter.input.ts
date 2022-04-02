import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaWhereInput } from './cinema-where.input';

@InputType()
export class CinemaRelationFilter {

    @Field(() => CinemaWhereInput, {nullable:true})
    is?: CinemaWhereInput;

    @Field(() => CinemaWhereInput, {nullable:true})
    isNot?: CinemaWhereInput;
}
