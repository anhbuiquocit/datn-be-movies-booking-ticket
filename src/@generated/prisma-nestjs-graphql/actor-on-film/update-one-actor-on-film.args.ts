import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmUpdateInput } from './actor-on-film-update.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';

@ArgsType()
export class UpdateOneActorOnFilmArgs {

    @Field(() => ActorOnFilmUpdateInput, {nullable:false})
    data!: ActorOnFilmUpdateInput;

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;
}
