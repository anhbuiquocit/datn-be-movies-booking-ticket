import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmCreateWithoutShowingInput } from './film-create-without-showing.input';

@InputType()
export class FilmCreateOrConnectWithoutShowingInput {

    @Field(() => FilmWhereUniqueInput, {nullable:false})
    where!: FilmWhereUniqueInput;

    @Field(() => FilmCreateWithoutShowingInput, {nullable:false})
    create!: FilmCreateWithoutShowingInput;
}
