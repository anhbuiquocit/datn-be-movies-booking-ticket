import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateNestedManyWithoutFilmInput } from '../showing/showing-create-nested-many-without-film.input';

@InputType()
export class FilmCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    trailler!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => String, {nullable:false})
    actor!: string;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => ShowingCreateNestedManyWithoutFilmInput, {nullable:true})
    Showing?: ShowingCreateNestedManyWithoutFilmInput;
}