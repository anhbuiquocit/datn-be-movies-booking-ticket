import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateManyActorInput } from './actor-on-film-create-many-actor.input';

@InputType()
export class ActorOnFilmCreateManyActorInputEnvelope {

    @Field(() => [ActorOnFilmCreateManyActorInput], {nullable:false})
    data!: Array<ActorOnFilmCreateManyActorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
