import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingCreateWithoutFilmInput } from './showing-create-without-film.input';

@InputType()
export class ShowingCreateOrConnectWithoutFilmInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingCreateWithoutFilmInput, {nullable:false})
    create!: ShowingCreateWithoutFilmInput;
}
