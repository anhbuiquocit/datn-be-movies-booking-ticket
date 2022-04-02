import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';

@InputType()
export class FilmRelationFilter {

    @Field(() => FilmWhereInput, {nullable:true})
    is?: FilmWhereInput;

    @Field(() => FilmWhereInput, {nullable:true})
    isNot?: FilmWhereInput;
}
