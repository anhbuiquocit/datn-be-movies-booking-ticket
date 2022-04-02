import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmCreateManyInput } from './film-create-many.input';

@ArgsType()
export class CreateManyFilmArgs {

    @Field(() => [FilmCreateManyInput], {nullable:false})
    data!: Array<FilmCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
