import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutCategoryInput } from './film-update-without-category.input';
import { FilmCreateWithoutCategoryInput } from './film-create-without-category.input';

@InputType()
export class FilmUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmUpdateWithoutCategoryInput, {nullable:false})
    update!: FilmUpdateWithoutCategoryInput;

    @Field(() => FilmCreateWithoutCategoryInput, {nullable:false})
    create!: FilmCreateWithoutCategoryInput;
}
