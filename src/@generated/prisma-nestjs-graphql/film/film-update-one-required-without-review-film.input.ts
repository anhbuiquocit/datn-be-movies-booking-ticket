import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutReviewFilmInput } from './film-create-without-review-film.input';
import { FilmCreateOrConnectWithoutReviewFilmInput } from './film-create-or-connect-without-review-film.input';
import { FilmUpsertWithoutReviewFilmInput } from './film-upsert-without-review-film.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutReviewFilmInput } from './film-update-without-review-film.input';

@InputType()
export class FilmUpdateOneRequiredWithoutReviewFilmInput {

    @Field(() => FilmCreateWithoutReviewFilmInput, {nullable:true})
    create?: FilmCreateWithoutReviewFilmInput;

    @Field(() => FilmCreateOrConnectWithoutReviewFilmInput, {nullable:true})
    connectOrCreate?: FilmCreateOrConnectWithoutReviewFilmInput;

    @Field(() => FilmUpsertWithoutReviewFilmInput, {nullable:true})
    upsert?: FilmUpsertWithoutReviewFilmInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    connect?: FilmWhereUniqueInput;

    @Field(() => FilmUpdateWithoutReviewFilmInput, {nullable:true})
    update?: FilmUpdateWithoutReviewFilmInput;
}
