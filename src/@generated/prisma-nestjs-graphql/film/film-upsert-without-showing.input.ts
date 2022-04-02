import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmUpdateWithoutShowingInput } from './film-update-without-showing.input';
import { FilmCreateWithoutShowingInput } from './film-create-without-showing.input';

@InputType()
export class FilmUpsertWithoutShowingInput {

    @Field(() => FilmUpdateWithoutShowingInput, {nullable:false})
    update!: FilmUpdateWithoutShowingInput;

    @Field(() => FilmCreateWithoutShowingInput, {nullable:false})
    create!: FilmCreateWithoutShowingInput;
}
