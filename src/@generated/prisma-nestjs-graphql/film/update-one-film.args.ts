import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmUpdateInput } from './film-update.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@ArgsType()
export class UpdateOneFilmArgs {

    @Field(() => FilmUpdateInput, {nullable:false})
    data!: FilmUpdateInput;

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;
}
