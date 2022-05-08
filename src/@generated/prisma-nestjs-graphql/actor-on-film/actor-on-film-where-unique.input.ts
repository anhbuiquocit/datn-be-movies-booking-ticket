import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmActorIdFilmIdCompoundUniqueInput } from './actor-on-film-actor-id-film-id-compound-unique.input';

@InputType()
export class ActorOnFilmWhereUniqueInput {

    @Field(() => ActorOnFilmActorIdFilmIdCompoundUniqueInput, {nullable:true})
    actorId_filmId?: ActorOnFilmActorIdFilmIdCompoundUniqueInput;
}
