import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateWithoutCategoryInput } from './film-create-without-category.input';

@InputType()
export class FilmCreateOrConnectWithoutCategoryInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmCreateWithoutCategoryInput, {nullable:false})
    create!: FilmCreateWithoutCategoryInput;
}
