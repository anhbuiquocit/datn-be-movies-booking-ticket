import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmUpdateManyMutationInput } from './actor-on-film-update-many-mutation.input';
import { ActorOnFilmWhereInput } from './actor-on-film-where.input';

@ArgsType()
export class UpdateManyActorOnFilmArgs {

    @Field(() => ActorOnFilmUpdateManyMutationInput, {nullable:false})
    data!: ActorOnFilmUpdateManyMutationInput;

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    where?: ActorOnFilmWhereInput;
}
