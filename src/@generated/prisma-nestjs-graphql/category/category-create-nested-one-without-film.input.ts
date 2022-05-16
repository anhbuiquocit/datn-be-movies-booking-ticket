import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutFilmInput } from './category-create-without-film.input';
import { CategoryCreateOrConnectWithoutFilmInput } from './category-create-or-connect-without-film.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@InputType()
export class CategoryCreateNestedOneWithoutFilmInput {

    @Field(() => CategoryCreateWithoutFilmInput, {nullable:true})
    create?: CategoryCreateWithoutFilmInput;

    @Field(() => CategoryCreateOrConnectWithoutFilmInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutFilmInput;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;
}
