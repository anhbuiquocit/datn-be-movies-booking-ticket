import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateWithoutFilmInput } from './category-create-without-film.input';
import { CategoryCreateOrConnectWithoutFilmInput } from './category-create-or-connect-without-film.input';
import { CategoryUpsertWithoutFilmInput } from './category-upsert-without-film.input';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryUpdateWithoutFilmInput } from './category-update-without-film.input';

@InputType()
export class CategoryUpdateOneWithoutFilmInput {

    @Field(() => CategoryCreateWithoutFilmInput, {nullable:true})
    create?: CategoryCreateWithoutFilmInput;

    @Field(() => CategoryCreateOrConnectWithoutFilmInput, {nullable:true})
    connectOrCreate?: CategoryCreateOrConnectWithoutFilmInput;

    @Field(() => CategoryUpsertWithoutFilmInput, {nullable:true})
    upsert?: CategoryUpsertWithoutFilmInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => CategoryWhereUniqueInput, {nullable:true})
    connect?: CategoryWhereUniqueInput;

    @Field(() => CategoryUpdateWithoutFilmInput, {nullable:true})
    update?: CategoryUpdateWithoutFilmInput;
}
