import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilmCreateWithoutShowingInput } from './film-create-without-showing.input';
import { FilmCreateOrConnectWithoutShowingInput } from './film-create-or-connect-without-showing.input';
import { FilmUpsertWithoutShowingInput } from './film-upsert-without-showing.input';
import { FilmWhereUniqueInput } from './film-where-unique.input';
import { FilmUpdateWithoutShowingInput } from './film-update-without-showing.input';

@InputType()
export class FilmUpdateOneRequiredWithoutShowingInput {

    @Field(() => FilmCreateWithoutShowingInput, {nullable:true})
    create?: FilmCreateWithoutShowingInput;

    @Field(() => FilmCreateOrConnectWithoutShowingInput, {nullable:true})
    connectOrCreate?: FilmCreateOrConnectWithoutShowingInput;

    @Field(() => FilmUpsertWithoutShowingInput, {nullable:true})
    upsert?: FilmUpsertWithoutShowingInput;

    @Field(() => FilmWhereUniqueInput, {nullable:true})
    connect?: FilmWhereUniqueInput;

    @Field(() => FilmUpdateWithoutShowingInput, {nullable:true})
    update?: FilmUpdateWithoutShowingInput;
}
