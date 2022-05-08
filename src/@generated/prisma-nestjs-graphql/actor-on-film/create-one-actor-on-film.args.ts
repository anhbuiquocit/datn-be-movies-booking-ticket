import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmCreateInput } from './actor-on-film-create.input';

@ArgsType()
export class CreateOneActorOnFilmArgs {

    @Field(() => ActorOnFilmCreateInput, {nullable:false})
    data!: ActorOnFilmCreateInput;
}
