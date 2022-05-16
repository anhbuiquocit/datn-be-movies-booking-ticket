import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewFilmCreateNestedManyWithoutFilmInput } from '../review-film/review-film-create-nested-many-without-film.input';
import { ActorOnFilmCreateNestedManyWithoutFilmInput } from '../actor-on-film/actor-on-film-create-nested-many-without-film.input';
import { CategoryCreateNestedOneWithoutFilmInput } from '../category/category-create-nested-one-without-film.input';

@InputType()
export class FilmCreateWithoutShowingInput {

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

    @Field(() => Int, {nullable:true})
    time?: number;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    imageDescription1?: string;

    @Field(() => String, {nullable:true})
    imageDescription2?: string;

    @Field(() => String, {nullable:true})
    imageDescription3?: string;

    @Field(() => ReviewFilmCreateNestedManyWithoutFilmInput, {nullable:true})
    ReviewFilm?: ReviewFilmCreateNestedManyWithoutFilmInput;

    @Field(() => ActorOnFilmCreateNestedManyWithoutFilmInput, {nullable:true})
    ActorOnFilm?: ActorOnFilmCreateNestedManyWithoutFilmInput;

    @Field(() => CategoryCreateNestedOneWithoutFilmInput, {nullable:true})
    Category?: CategoryCreateNestedOneWithoutFilmInput;
}
