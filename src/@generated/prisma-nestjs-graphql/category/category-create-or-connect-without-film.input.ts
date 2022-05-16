import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';
import { CategoryCreateWithoutFilmInput } from './category-create-without-film.input';

@InputType()
export class CategoryCreateOrConnectWithoutFilmInput {

    @Field(() => CategoryWhereUniqueInput, {nullable:false})
    where!: CategoryWhereUniqueInput;

    @Field(() => CategoryCreateWithoutFilmInput, {nullable:false})
    create!: CategoryCreateWithoutFilmInput;
}
