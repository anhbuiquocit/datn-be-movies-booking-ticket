import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateInput } from './film-create.input';
import { FilmUpdateInput } from './film-update.input';

@ArgsType()
export class UpsertOneFilmArgs {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmCreateInput, {nullable:false})
    create!: FilmCreateInput;

    @Field(() => FilmUpdateInput, {nullable:false})
    update!: FilmUpdateInput;
}
