import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmUncheckedCreateNestedManyWithoutCategoryInput } from '../film/film-unchecked-create-nested-many-without-category.input';

@InputType()
export class CategoryUncheckedCreateInput {

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

    @Field(() => FilmUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    Film?: FilmUncheckedCreateNestedManyWithoutCategoryInput;
}
