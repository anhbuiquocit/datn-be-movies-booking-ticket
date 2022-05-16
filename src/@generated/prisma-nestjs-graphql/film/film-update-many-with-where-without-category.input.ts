import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmScalarWhereInput } from './film-scalar-where.input';
import { FilmUpdateManyMutationInput } from './film-update-many-mutation.input';

@InputType()
export class FilmUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => FilmScalarWhereInput, {nullable:false})
    where!: FilmScalarWhereInput;

    @Field(() => FilmUpdateManyMutationInput, {nullable:false})
    data!: FilmUpdateManyMutationInput;
}
