import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutReviewFilmInput } from './film-create-without-review-film.input';
import { FilmCreateOrConnectWithoutReviewFilmInput } from './film-create-or-connect-without-review-film.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@InputType()
export class FilmCreateNestedOneWithoutReviewFilmInput {

    @Field(() => FilmCreateWithoutReviewFilmInput, {nullable:true})
    create?: FilmCreateWithoutReviewFilmInput;

    @Field(() => FilmCreateOrConnectWithoutReviewFilmInput, {nullable:true})
    connectOrCreate?: FilmCreateOrConnectWithoutReviewFilmInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    connect?: FilmWhereUniqueInput;
}
