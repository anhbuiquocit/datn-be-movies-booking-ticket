import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateWithoutReviewFilmInput } from './film-create-without-review-film.input';

@InputType()
export class FilmCreateOrConnectWithoutReviewFilmInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmCreateWithoutReviewFilmInput, {nullable:false})
    create!: FilmCreateWithoutReviewFilmInput;
}
