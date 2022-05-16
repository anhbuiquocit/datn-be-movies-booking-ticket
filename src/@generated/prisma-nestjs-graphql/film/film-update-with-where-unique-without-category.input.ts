import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutCategoryInput } from './film-update-without-category.input';

@InputType()
export class FilmUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmUpdateWithoutCategoryInput, {nullable:false})
    data!: FilmUpdateWithoutCategoryInput;
}
