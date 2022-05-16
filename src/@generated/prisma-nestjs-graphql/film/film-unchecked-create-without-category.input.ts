import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ShowingUncheckedCreateNestedManyWithoutFilmInput } from '../showing/showing-unchecked-create-nested-many-without-film.input';
import { ReviewFilmUncheckedCreateNestedManyWithoutFilmInput } from '../review-film/review-film-unchecked-create-nested-many-without-film.input';
import { ActorOnFilmUncheckedCreateNestedManyWithoutFilmInput } from '../actor-on-film/actor-on-film-unchecked-create-nested-many-without-film.input';

@InputType()
export class FilmUncheckedCreateWithoutCategoryInput {

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

    @Field(() => Boolean, {nullable:true})
    isHot?: boolean;

    @Field(() => ShowingUncheckedCreateNestedManyWithoutFilmInput, {nullable:true})
    Showing?: ShowingUncheckedCreateNestedManyWithoutFilmInput;

    @Field(() => ReviewFilmUncheckedCreateNestedManyWithoutFilmInput, {nullable:true})
    ReviewFilm?: ReviewFilmUncheckedCreateNestedManyWithoutFilmInput;

    @Field(() => ActorOnFilmUncheckedCreateNestedManyWithoutFilmInput, {nullable:true})
    ActorOnFilm?: ActorOnFilmUncheckedCreateNestedManyWithoutFilmInput;
}
