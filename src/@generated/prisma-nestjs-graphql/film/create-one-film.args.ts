import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmCreateInput } from './film-create.input';

@ArgsType()
export class CreateOneFilmArgs {

    @Field(() => FilmCreateInput, {nullable:false})
    data!: FilmCreateInput;
}
