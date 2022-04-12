import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilmWhereUniqueInput } from './film-where-unique.input';

@ArgsType()
export class DeleteOneFilmArgs {
  @Field(() => FilmWhereUniqueInput, { nullable: false })
  where!: FilmWhereUniqueInput;
}
