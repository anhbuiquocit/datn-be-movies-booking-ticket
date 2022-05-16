import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';

@ArgsType()
export class FindUniqueActorOnFilmArgs {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;
}