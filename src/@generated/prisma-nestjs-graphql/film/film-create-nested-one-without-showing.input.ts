import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutShowingInput } from './film-create-without-showing.input';
import { FilmCreateOrConnectWithoutShowingInput } from './film-create-or-connect-without-showing.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@InputType()
export class FilmCreateNestedOneWithoutShowingInput {

    @Field(() => FilmCreateWithoutShowingInput, {nullable:true})
    create?: FilmCreateWithoutShowingInput;

    @Field(() => FilmCreateOrConnectWithoutShowingInput, {nullable:true})
    connectOrCreate?: FilmCreateOrConnectWithoutShowingInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    connect?: FilmWhereUniqueInput;
}
