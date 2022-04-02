import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutFilmInput } from './showing-update-without-film.input';

@InputType()
export class ShowingUpdateWithWhereUniqueWithoutFilmInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutFilmInput, {nullable:false})
    data!: ShowingUpdateWithoutFilmInput;
}
