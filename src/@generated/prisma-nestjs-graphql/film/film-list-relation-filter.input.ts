import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';

@InputType()
export class FilmListRelationFilter {

    @Field(() => FilmWhereInput, {nullable:true})
    every?: FilmWhereInput;

    @Field(() => FilmWhereInput, {nullable:true})
    some?: FilmWhereInput;

    @Field(() => FilmWhereInput, {nullable:true})
    none?: FilmWhereInput;
}
