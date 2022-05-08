import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmCreateInput } from './actor-on-film-create.input';
import { ActorOnFilmUpdateInput } from './actor-on-film-update.input';

@ArgsType()
export class UpsertOneActorOnFilmArgs {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmCreateInput, {nullable:false})
    create!: ActorOnFilmCreateInput;

    @Field(() => ActorOnFilmUpdateInput, {nullable:false})
    update!: ActorOnFilmUpdateInput;
}
