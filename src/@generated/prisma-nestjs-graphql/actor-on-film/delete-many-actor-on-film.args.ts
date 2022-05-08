import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmWhereInput } from './actor-on-film-where.input';

@ArgsType()
export class DeleteManyActorOnFilmArgs {

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    where?: ActorOnFilmWhereInput;
}
