import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutFilmInput } from './showing-update-without-film.input';
import { ShowingCreateWithoutFilmInput } from './showing-create-without-film.input';

@InputType()
export class ShowingUpsertWithWhereUniqueWithoutFilmInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutFilmInput, {nullable:false})
    update!: ShowingUpdateWithoutFilmInput;

    @Field(() => ShowingCreateWithoutFilmInput, {nullable:false})
    create!: ShowingCreateWithoutFilmInput;
}
