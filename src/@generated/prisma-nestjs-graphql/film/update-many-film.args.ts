import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmUpdateManyMutationInput } from './film-update-many-mutation.input';
import { FilmWhereInput } from './film-where.input';

@ArgsType()
export class UpdateManyFilmArgs {

    @Field(() => FilmUpdateManyMutationInput, {nullable:false})
    data!: FilmUpdateManyMutationInput;

    @Field(() => FilmWhereInput, {nullable:true})
    where?: FilmWhereInput;
}
