import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryUpdateWithoutFilmInput } from './category-update-without-film.input';
import { CategoryCreateWithoutFilmInput } from './category-create-without-film.input';

@InputType()
export class CategoryUpsertWithoutFilmInput {

    @Field(() => CategoryUpdateWithoutFilmInput, {nullable:false})
    update!: CategoryUpdateWithoutFilmInput;

    @Field(() => CategoryCreateWithoutFilmInput, {nullable:false})
    create!: CategoryCreateWithoutFilmInput;
}
