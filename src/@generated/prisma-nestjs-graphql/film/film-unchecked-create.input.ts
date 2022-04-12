import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingUncheckedCreateNestedManyWithoutFilmInput } from '../showing/showing-unchecked-create-nested-many-without-film.input';

@InputType()
export class FilmUncheckedCreateInput {

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

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    director?: string;

    @Field(() => String, {nullable:true})
    actor?: string;

    @Field(() => String, {nullable:true})
    time?: string;

    @Field(() => ShowingUncheckedCreateNestedManyWithoutFilmInput, {nullable:true})
    Showing?: ShowingUncheckedCreateNestedManyWithoutFilmInput;
}
