import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmWhereInput } from './film-where.input';

@ArgsType()
export class DeleteManyFilmArgs {

    @Field(() => FilmWhereInput, {nullable:true})
    where?: FilmWhereInput;
}
