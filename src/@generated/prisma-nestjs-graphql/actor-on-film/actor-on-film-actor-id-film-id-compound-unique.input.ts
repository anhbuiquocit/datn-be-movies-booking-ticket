import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ActorOnFilmActorIdFilmIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    actorId!: string;

    @Field(() => String, {nullable:false})
    filmId!: string;
}
