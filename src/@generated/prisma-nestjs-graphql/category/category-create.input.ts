import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateNestedManyWithoutCategoryInput } from '../film/film-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deleteAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => FilmCreateNestedManyWithoutCategoryInput, {nullable:true})
    Film?: FilmCreateNestedManyWithoutCategoryInput;
}
